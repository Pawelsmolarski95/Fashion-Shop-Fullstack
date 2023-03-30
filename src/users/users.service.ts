import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Password, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prismaService.user.findMany({
      include: {
        password: true,
        order: true,
      },
    });
  }

  async getById(id: User['id']): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async getByEmail(email: User['email']): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }
  createNewUser(
    userData: Omit<User, 'id' | 'order'>,
    password: Password['hashedPassword'],
  ): Promise<User> {
    return this.prismaService.user.create({
      data: {
        ...userData,
        password: {
          create: {
            hashedPassword: password,
          },
        },
      },
    });
  }

  async deleteUser(id: User['id']): Promise<User | null> {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
