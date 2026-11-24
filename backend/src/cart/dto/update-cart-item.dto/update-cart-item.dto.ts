import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsPositive, Max } from "class-validator";

export class UpdateCartItemDto {
  @ApiProperty({
    example: 2,
    description: "New quantity",
    minimum: 1,
    maximum: 50,
  })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @Max(50)
  quantity: number;
}