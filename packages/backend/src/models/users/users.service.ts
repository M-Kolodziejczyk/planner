import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user) {
    const res = this.usersRepository.save(user);
    console.log('RES:>> ', res);
    return res;
  }

  findAll(): Promise<User[]> {
    console.log(this.usersRepository.find());
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
