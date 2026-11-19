import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class ChangePasswordDto {
  @ApiProperty({
    example: "OldPassword123!",
    description: "Current password",
  })
  @IsString()
  @MinLength(12)
  @MaxLength(72)
  currentPassword: string;

  @ApiProperty({
    example: "NewSecurePassword456!",
    description: "New password (minimum 12 characters)",
  })
  @IsString()
  @MinLength(12)
  @MaxLength(72)
  newPassword: string;
}
