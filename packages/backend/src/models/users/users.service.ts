import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    // const newUser = await this.usersRepository.create(userData);
    // await this.usersRepository.save(newUser);
    // console.log('NEW USERRRRRRRRRRR: ', newUser);
    // return newUser;
    console.log('USER DATA!!!: ', userData);
    return userData;
  }

  findAll(): Promise<User[]> {
    console.log(this.usersRepository.find());
    return this.usersRepository.find();
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
