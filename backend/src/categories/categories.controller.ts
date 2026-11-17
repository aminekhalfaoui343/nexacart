
import { Controller, Get, Param } from "@nestjs/common";
import { CategoriesService } from "./categories.service.js";

@Controller("categories")
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(":slug")
  findOneBySlug(@Param("slug") slug: string) {
    return this.categoriesService.findOneBySlug(slug);
  }
}
