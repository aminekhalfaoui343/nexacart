import {
  BadRequestException,
  Injectable,
} from "@nestjs/common";
import { randomUUID } from "node:crypto";

import { PrismaService } from "../prisma/prisma.service.js";
import { CreateOrderDto } from "./dto/create-order.dto/create-order.dto.js";

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(userId: number, dto: CreateOrderDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Retrieve the customer's cart and its products.
      const cart = await tx.cart.findUnique({
        where: { userId },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      if (!cart || cart.items.length === 0) {
        throw new BadRequestException("Your cart is empty");
      }

      // 2. Validate products and calculate the subtotal in cents.
      let subtotalCents = 0;

      for (const item of cart.items) {
        const product = item.product;

        if (!product.isActive) {
          throw new BadRequestException(
            `${product.name} is no longer available`,
          );
        }

        if (product.stock < item.quantity) {
          throw new BadRequestException(
            `Insufficient stock for ${product.name}. Available: ${product.stock}`,
          );
        }

        const unitPriceCents = Math.round(
          Number(product.price) * 100,
        );

        subtotalCents += unitPriceCents * item.quantity;
      }

      // 3. Reserve stock using conditional database updates.
      // This protects against concurrent purchases of the last units.
      for (const item of cart.items) {
        const stockUpdate = await tx.product.updateMany({
          where: {
            id: item.productId,
            isActive: true,
            stock: {
              gte: item.quantity,
            },
          },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });

        if (stockUpdate.count !== 1) {
          throw new BadRequestException(
            `Insufficient stock for ${item.product.name}`,
          );
        }
      }

      // 4. Calculate order totals.
      const shippingCostCents = 0;
      const discountCents = 0;

      const totalCents =
        subtotalCents + shippingCostCents - discountCents;

      // 5. Create the order and its historical item snapshots.
      const order = await tx.order.create({
        data: {
          orderNumber: `NC-${randomUUID()}`,
          userId,

          status: "PENDING",
          paymentStatus: "PENDING",
          paymentMethod: "CASH_ON_DELIVERY",

          subtotal: (subtotalCents / 100).toFixed(2),
          shippingCost: (shippingCostCents / 100).toFixed(2),
          discount: (discountCents / 100).toFixed(2),
          total: (totalCents / 100).toFixed(2),

          customerEmail: dto.customerEmail.trim().toLowerCase(),
          customerPhone: dto.customerPhone.trim(),

          shippingAddress: dto.shippingAddress.trim(),
          shippingCity: dto.shippingCity.trim(),
          shippingState: dto.shippingState?.trim(),
          shippingPostalCode: dto.shippingPostalCode?.trim(),
          shippingCountry: dto.shippingCountry.trim(),
          notes: dto.notes?.trim(),

          items: {
            create: cart.items.map((item) => {
              const unitPriceCents = Math.round(
                Number(item.product.price) * 100,
              );

              const lineTotalCents =
                unitPriceCents * item.quantity;

              return {
                productId: item.productId,
                productName: item.product.name,
                productSku: item.product.sku,
                imageUrl: item.product.imageUrl,
                unitPrice: (unitPriceCents / 100).toFixed(2),
                quantity: item.quantity,
                lineTotal: (lineTotalCents / 100).toFixed(2),
              };
            }),
          },
        },
        include: {
          items: true,
        },
      });

      // 6. Empty the cart only after successful order creation.
      await tx.cartItem.deleteMany({
        where: {
          cartId: cart.id,
        },
      });

      return order;
    });
  }
}