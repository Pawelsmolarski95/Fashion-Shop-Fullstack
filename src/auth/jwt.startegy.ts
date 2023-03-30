import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth'];
          if (!data) {
            return null;
          }
          return data.access_token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: 'xrwe4543534',
    });
  }

  async validate(payload: any) {
    const user = await this.userService.getById(payload.sub);
    return user;
  }
}