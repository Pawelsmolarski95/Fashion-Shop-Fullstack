import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
    if (!productById) throw new NotFoundException('Product not found');
    return productById;
  }
  @Get('/category/:category')
  async getProductByCategory(@Param('category') category: string) {
    const productByCategory = await this.productsService.getByCategory(
      category,
    );
    if (!productByCategory) throw new NotFoundException('Products not found');
    return productByCategory;
  }

  @Get('/searchphrase/:phrase')
  async searchForPhrase(@Query('phrase') phrase: string): Promise<any> {
    const results = await this.productsService.getBySearchPhrase(phrase);
    return results;
  }

  @Delete('/:id')
  async deleteProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const productById = await this.productsService.getById(id);
    if (!productById) throw new NotFoundException('Product not found');
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
    @Body() productData: UpdateProductDTO,
  ) {
    return this.productsService.updateProductById(id, productData);
  }
}
