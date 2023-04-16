import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class ProductOrder {
  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: number;
}
class Address {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  zip: string;
}
export class CreateOrderDTO {
  
  @IsNotEmpty()
  product: ProductOrder;

  @IsNotEmpty()
  address: Address;
  @IsString()
  comment: string;
}
