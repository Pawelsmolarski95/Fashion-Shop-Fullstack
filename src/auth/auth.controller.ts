import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register') 
    registerUser(@Body() registerUser: RegisterDTO) {
        return this.authService.register(registerUser)
    }
}