import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AddToWishlistDto } from "./dto/add-to-wishlist.dto/add-to-wishlist.dto.js";
import type { Request } from "express";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard/jwt-auth.guard.js";
import { WishlistService } from "./wishlist.service.js";

interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    role: string;
  };
}

@ApiTags("Wishlist")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("wishlist")
export class WishlistController {
  constructor(
    private readonly wishlistService: WishlistService,
  ) {}

    @Get()
    getWishlist(@Req() request: AuthenticatedRequest) {
    return this.wishlistService.getWishlist(
        request.user.userId,
    );
    }

    @Post("items")
    addItem(
        @Req() request: AuthenticatedRequest,
        @Body() dto: AddToWishlistDto,
        ) {
        return this.wishlistService.addItem(
            request.user.userId,
            dto,
        );
    }
}