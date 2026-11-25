import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { FindOrdersQueryDto } from "./dto/find-orders-query.dto/find-orders-query.dto.js";
import type { Request } from "express";
import {
  ApiBearerAuth,
  ApiTags,
} from "@nestjs/swagger";

import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard/jwt-auth.guard.js";
import { CreateOrderDto } from "./dto/create-order.dto/create-order.dto.js";
import { OrdersService } from "./orders.service.js";

interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    role: string;
  };
}

@ApiTags("Orders")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("orders")
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) {}

  @Post()
  createOrder(
    @Req() request: AuthenticatedRequest,
    @Body() dto: CreateOrderDto,
  ) {
    return this.ordersService.createOrder(
      request.user.userId,
      dto,
    );
  }

  @Get()
  findMyOrders(
    @Req() request: AuthenticatedRequest,
    @Query() query: FindOrdersQueryDto,
    ) {
    return this.ordersService.findMyOrders(
        request.user.userId,
        query,
    );
  }

  @Get(":id")
  findMyOrderById(
    @Req() request: AuthenticatedRequest,
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.ordersService.findMyOrderById(
      request.user.userId,
      id,
    );
  }

  @Patch(":id/cancel")
  cancelOrder(
    @Req() request: AuthenticatedRequest,
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.ordersService.cancelOrder(
      request.user.userId,
      id,
    );
  }
}