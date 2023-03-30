import { Product } from '@prisma/client';
import { CreateOrderDTO } from './dto/create-order.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get('/')
  getAllOrders() {
    return this.orderService.getAll();
  }

  @Get('/:id')
  async getOrderById(@Param('id', new ParseUUIDPipe()) id: string) {
    const orderById = await this.orderService.getById(id);
    if (!orderById) throw new NotFoundException('Order not found');
    return orderById;
  }

  @Delete('/:id')
  async deleteOrderById(@Param('id', new ParseUUIDPipe()) id: string) {
    const deleteById = await this.orderService.getById(id);
    if (!deleteById) throw new NotFoundException('Order not found');
    this.orderService.deleteBookById(id);
    return { success: true };
  }

  @Post()
  createOrder(@Body() orderData: CreateOrderDTO) {
    return this.orderService.createNewOrder(orderData);
  }
}
