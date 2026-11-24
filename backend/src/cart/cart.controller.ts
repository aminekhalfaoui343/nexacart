import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import type { Request } from "express";
import { UpdateCartItemDto } from "./dto/update-cart-item.dto/update-cart-item.dto.js";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AddToCartDto } from "./dto/add-to-cart.dto/add-to-cart.dto.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard/jwt-auth.guard.js";
import { CartService } from "./cart.service.js";

interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    role: string;
  };
}

@ApiTags("Cart")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Req() request: AuthenticatedRequest) {
    return this.cartService.getCart(request.user.userId);
  }


  @Post("items")
  addItem(
    @Req() request: AuthenticatedRequest,
    @Body() addToCartDto: AddToCartDto,
  ) {
    return this.cartService.addItem(
      request.user.userId,
      addToCartDto,
    );
  }

  @Patch("items/:itemId")
  updateItem(
    @Req() request: AuthenticatedRequest,
    @Param("itemId", ParseIntPipe) itemId: number,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateItem(
      request.user.userId,
      itemId,
      dto.quantity,
    );
  }

  @Delete("items/:itemId")
  removeItem(
    @Req() request: AuthenticatedRequest,
    @Param("itemId", ParseIntPipe) itemId: number,
  ) {
    return this.cartService.removeItem(
      request.user.userId,
      itemId,
    );
  }

  @Delete()
  clearCart(@Req() request: AuthenticatedRequest) {
    return this.cartService.clearCart(request.user.userId);
  }

}