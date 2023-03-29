import {
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAll();
  }

  @Get()
  async getProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const productById = await this.productsService.getById(id);
    return productById;
  }

  @Delete()
  async deleteProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const productById = await this.productsService.getById(id);
    this.productsService.deleteById(id);
    return { success: true };
  }
}
