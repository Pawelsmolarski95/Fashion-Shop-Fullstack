import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDTO } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
 
    private usersService: UsersService,
  ) {}

  public async register(registrationData: RegisterDTO) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    const userData = {
      email: registrationData.email,
    };
    return this.usersService.createNewUser(userData, hashedPassword);
  }

  public async validateUser(email: string, password: string) {
    const user = await this.usersService.getByEmail(email);
    if (user && (await bcrypt.compare(password, user.password.hashedPassword))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

}
