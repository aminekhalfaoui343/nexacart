import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class LoginDto {
  @Transform(({ value }) =>
    typeof value === "string" ? value.trim().toLowerCase() : value,
  )
  @IsEmail()
  @MaxLength(254)
  @ApiProperty({ example: "amine@example.com" })
  email: string;

  @IsString()
  @MinLength(12)
  @MaxLength(72)
  @ApiProperty({ example: "admin123", minLength: 12 })
  password: string;
}
