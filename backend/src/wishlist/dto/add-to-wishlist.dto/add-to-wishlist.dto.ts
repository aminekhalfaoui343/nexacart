import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsPositive } from "class-validator";

export class AddToWishlistDto {
  @ApiProperty({
    example: 1,
    description: "ID of the product to add",
  })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  productId: number;
}