import {
  Controller,
  Get,
  Patch,
  Body,
  Req,
  UseGuards,
} from "@nestjs/common";
import type { Request } from "express";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

import { UsersService } from "./users.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard/jwt-auth.guard.js";
import { UpdateProfileDto } from "./dto/update-profile.dto/update-profile.dto.js";
import { Post } from "@nestjs/common"; // Don't add Post; we'll use PATCH
import { ChangePasswordDto } from "./dto/change-password.dto/change-password.dto.js";

interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

@ApiTags("Users")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  getMyProfile(@Req() request: AuthenticatedRequest) {
    return this.usersService.findProfileById(
      request.user.userId,
    );
  }

  @Patch("me")
  updateMyProfile(
    @Req() request: AuthenticatedRequest,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile(
      request.user.userId,
      updateProfileDto,
    );
  }


  @Patch("me/password")
  changePassword(
    @Req() request: AuthenticatedRequest,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(
      request.user.userId,
      changePasswordDto.currentPassword,
      changePasswordDto.newPassword,
    );
  }
}
