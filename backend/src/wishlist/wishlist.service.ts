import {
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { AddToWishlistDto } from "./dto/add-to-wishlist.dto/add-to-wishlist.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}

    async getWishlist(userId: number) {
    const wishlist = await this.prisma.wishlist.upsert({
        where: { userId },
        update: {},
        create: { userId },
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

    return {
        id: wishlist.id,
        userId: wishlist.userId,
        items: wishlist.items,
        totalItems: wishlist.items.length,
        createdAt: wishlist.createdAt,
        updatedAt: wishlist.updatedAt,
    };
    }

    async addItem(userId: number, dto: AddToWishlistDto) {
    const product = await this.prisma.product.findFirst({
        where: {
            id: dto.productId,
            isActive: true,
        },
        select: {
            id: true,
        },
    });

    if (!product) {
        throw new NotFoundException(
        "Product not found or unavailable",
        );
    }

    const wishlist = await this.prisma.wishlist.upsert({
        where: { userId },
        update: {},
        create: { userId },
    });

    await this.prisma.wishlistItem.upsert({
        where: {
        wishlistId_productId: {
            wishlistId: wishlist.id,
            productId: product.id,
        },
        },
        update: {},
        create: {
        wishlistId: wishlist.id,
        productId: product.id,
        },
    });

    return this.getWishlist(userId);
    }

    async removeItem(userId: number, itemId: number) {
        const item = await this.prisma.wishlistItem.findFirst({
            where: {
            id: itemId,
            wishlist: {
                userId,
            },
            },
        });

        if (!item) {
            throw new NotFoundException("Wishlist item not found");
        }

        await this.prisma.wishlistItem.delete({
            where: {
            id: itemId,
            },
        });

        return this.getWishlist(userId);
    }
}