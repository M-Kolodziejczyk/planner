import { Controller, Get } from '@nestjs/common';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
}
