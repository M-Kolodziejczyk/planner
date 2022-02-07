import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { TaskController } from './tasks.controller';
import { UsersModule } from '../users/users.module';
import { ProjectsModule } from '../projects/projects.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), UsersModule, ProjectsModule],
  providers: [TasksService],
  controllers: [TaskController],
})
export class TasksModule {}
