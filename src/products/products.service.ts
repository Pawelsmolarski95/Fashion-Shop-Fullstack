import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        image: true,
      },
    });
  }

  getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        image: true,
      },
    });
  }

  getByCategory(category: Product['category']): Promise<Product[] | null> {
    return this.prismaService.product.findMany({
      where: { category },
      include: {
        image: true,
      },
    });
  }

  async getBySearchPhrase(searchphrase: string): Promise<Product[] | null> {
    return await this.prismaService.product.findMany({
      where: {
        name: {
          contains: 'searchphrase',
        },
      },
    });
  }

  deleteById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  createNewProduct(
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.create({
      data: productData,
    });
  }
  updateProductById(
    id: Product['id'],
    bookData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: { id },
      data: bookData,
    });
  }
}
