import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDTO {
  userId: string;

  productId: string;

  @IsString()
  @IsNotEmpty()
  adress: string;
  @IsString()
  comment: string;
}
