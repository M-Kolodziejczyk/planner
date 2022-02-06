import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(data) {
    return `this method creat tasks ${data}`;
  }

  async findAll() {
    try {
      const tasks = await this.taskRepository.find();

      console.log('Tasks"', tasks);

      return tasks;
    } catch (error) {
      return 'je;;p';
    }
  }
}
