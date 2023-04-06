import { Image } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsString()
  @Length(10, 4000)
  description: string;
  @IsString()
  category: string;
  @IsString()
  material: string;
  @IsString()
  color: string;
  @IsString()
  size: string;

  image: string;
  @IsNumber()
  rating: number;
}
