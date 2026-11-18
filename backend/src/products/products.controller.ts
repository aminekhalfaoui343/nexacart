import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from "@nestjs/common";

import { FindProductsQueryDto } from "./dto/find-products-query.dto.js";
import { ProductsService } from "./products.service.js";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() query: FindProductsQueryDto) {
    return this.productsService.findAll(query);
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
