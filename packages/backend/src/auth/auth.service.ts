import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/models/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);

    console.log('User', user);
    if (user) {
      try {
        const res = await bcrypt.compare(password, user.password);

        if (res) {
          const { password, ...result } = user;
          return result;
        }
      } catch (error) {
        console.log('Error', error);
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registrationData) {
    return await this.usersService.create(registrationData);
  }
}
