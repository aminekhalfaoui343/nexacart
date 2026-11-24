import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsInt,
  IsPositive,
  Max,
} from "class-validator";

export class AddToCartDto {
  @ApiProperty({
    example: 1,
    description: "ID of the product to add",
  })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  productId: number;

  @ApiProperty({
    example: 1,
    description: "Quantity to add",
    minimum: 1,
    maximum: 50,
  })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @Max(50)
  quantity: number;
}
