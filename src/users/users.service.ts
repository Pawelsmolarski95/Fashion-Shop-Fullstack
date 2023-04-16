import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Password, User, Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prismaService.user.findMany({
      include: {
        password: true,
        
      },
    });
  }

  async getById(id: User['id']): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: { id },
      include: { password: true }
    });
  }

  async getByEmail(
    email: User['email'],
  ): Promise<(User & { password: Password }) | null> {
    return await this.prismaService.user.findUnique({
      where: { email },
      include: {
        password: true,
      },
    });
  }
  createNewUser(
    userData: Omit<User, 'id' | 'order' | 'role'>,
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
