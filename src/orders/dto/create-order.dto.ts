import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class CreateOrderDTO {

  @IsNotEmpty()

  products: Array<object>;

  @IsNotEmpty()
  address: Array<object>;
  @IsString()
  comment: string;
}
