import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { ProductsService } from "./products.service.js";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get("slug/:slug")
  findOneBySlug(@Param("slug") slug: string) {
    return this.productsService.findOneBySlug(slug);
  }

  @Get(":id")
  findOneById(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.findOneById(id);
  }
}
