
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
  }

  async findOneBySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        slug,
      },
      include: {
        products: {
          where: {
            isActive: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException(
        `Category with slug "${slug}" not found`,
      );
    }

    return category;
  }
}
