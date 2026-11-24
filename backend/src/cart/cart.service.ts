import { PrismaService } from "../prisma/prisma.service.js";
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { AddToCartDto } from "./dto/add-to-cart.dto/add-to-cart.dto.js";

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async getCart(userId: number) {
    const cart = await this.prisma.cart.upsert({
      where: {
        userId,
      },
      update: {},
      create: {
        userId,
      },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
                brand: true,
                price: true,
                originalPrice: true,
                imageUrl: true,
                stock: true,
                isActive: true,
              },
            },
          },
        },
      },
    });

    const items = cart.items.map((item) => {
      const subtotal = Number(item.product.price) * item.quantity;

      return {
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
        product: item.product,
        subtotal: Number(subtotal.toFixed(2)),
      };
    });

    const totalItems = items.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    const totalPrice = items.reduce(
      (total, item) => total + item.subtotal,
      0,
    );

    return {
      id: cart.id,
      userId: cart.userId,
      items,
      totalItems,
      totalPrice: Number(totalPrice.toFixed(2)),
      createdAt: cart.createdAt,
      updatedAt: cart.updatedAt,
    };
  }


  async addItem(userId: number, dto: AddToCartDto) {
    const product = await this.prisma.product.findFirst({
      where: {
        id: dto.productId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        stock: true,
      },
    });

    if (!product) {
      throw new NotFoundException("Product not found or unavailable");
    }

    if (product.stock < dto.quantity) {
      throw new BadRequestException(
        `Only ${product.stock} unit(s) available`,
      );
    }

    const cart = await this.prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    const existingItem = await this.prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: product.id,
        },
      },
    });

    const newQuantity = existingItem
      ? existingItem.quantity + dto.quantity
      : dto.quantity;

    if (newQuantity > product.stock) {
      throw new BadRequestException(
        `Only ${product.stock} unit(s) available. You already have ${existingItem?.quantity ?? 0} in your cart.`,
      );
    }

    await this.prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: product.id,
        },
      },
      update: {
        quantity: newQuantity,
      },
      create: {
        cartId: cart.id,
        productId: product.id,
        quantity: dto.quantity,
      },
    });

    return this.getCart(userId);
  }

  async updateItem(
    userId: number,
    itemId: number,
    quantity: number,
  ) {
    const item = await this.prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cart: {
          userId,
        },
      },
      include: {
        product: {
          select: {
            stock: true,
            isActive: true,
          },
        },
      },
    });

    if (!item) {
      throw new NotFoundException("Cart item not found");
    }

    if (!item.product.isActive) {
      throw new BadRequestException("Product is unavailable");
    }

    if (quantity > item.product.stock) {
      throw new BadRequestException(
        `Only ${item.product.stock} unit(s) available`,
      );
    }

    await this.prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    });

    return this.getCart(userId);
  }

  async removeItem(userId: number, itemId: number) {
    const item = await this.prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cart: {
          userId,
        },
      },
    });

    if (!item) {
      throw new NotFoundException("Cart item not found");
    }

    await this.prisma.cartItem.delete({
      where: { id: itemId },
    });

    return this.getCart(userId);
  }

}