import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateOrderDto {
  @ApiProperty({ example: "customer@example.com" })
  @IsEmail()
  @MaxLength(255)
  customerEmail: string;

  @ApiProperty({ example: "+21612345678" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  customerPhone: string;

  @ApiProperty({ example: "15 Avenue Habib Bourguiba" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  shippingAddress: string;

  @ApiProperty({ example: "Tunis" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  shippingCity: string;

  @ApiPropertyOptional({ example: "Tunis" })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  shippingState?: string;

  @ApiPropertyOptional({ example: "1000" })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  shippingPostalCode?: string;

  @ApiProperty({ example: "Tunisia" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  shippingCountry: string;

  @ApiPropertyOptional({
    example: "Please call before delivery.",
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}