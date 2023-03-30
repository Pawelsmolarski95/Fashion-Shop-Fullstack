import { UsersService } from './users.service';
import { Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

@Get('/') 
getAllUsers() {
    return this.userService.getAll();
}

@Get('/:id')
async getUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    const userById = await this.userService.getById(id);
    if (!userById) throw new NotFoundException('User not exist');
    return userById;
}

@Get('/:email')
async getUserByEmail(@Param('email') email: string) {
    const userByEmail = await this.userService.getById(email);
    if (!userByEmail) throw new NotFoundException('User not exist');
    return userByEmail;
}

@Delete(':id')

  public async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.userService.getById(id)))
      throw new NotFoundException('User not found');
    await this.userService.deleteUser(id);
    return { success: true };
  }

}
