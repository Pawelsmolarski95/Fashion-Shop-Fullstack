import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAllProducts() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const productById = await this.productsService.getById(id);
    return productById;
  }
  @Get('/category/:category')
  async getProductByCategory(@Param('category') category: string) {
    const productByCategory = await this.productsService.getByCategory(category);
    return productByCategory;
  }

  @Delete('/:id')
  async deleteProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const productById = await this.productsService.getById(id);
    this.productsService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  createProduct(@Body() productData: CreateProductDTO) {
    return this.productsService.createNewProduct(productData);
  }

  @Put('/:id') 
  updateProductById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO
  ) {
    return this.productsService.updateProductById(id, productData); 
  }
}
