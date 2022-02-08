import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './entities/task.entity';
import { UsersService } from '../users/users.service';
import { ProjectsService } from '../projects/projects.service';
import { CreateTaskDto } from './dto/create-task.dot';
import { Project } from '../projects/entities/project.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private usersService: UsersService,
    private projectsService: ProjectsService,
  ) {}

  async createTask(taskData: CreateTaskDto) {
    const { name, description, status, createdBy, assignedTo, projectId } =
      taskData;
    const task = await this.taskRepository.create({
      name,
      description,
      status,
    });

    const user = await this.usersService.getProfileById(createdBy);
    const assignedUser = await this.usersService.getProfileById(assignedTo);
    const project = (await this.projectsService.findById(projectId)) as Project;
    task.createdBy = user;
    task.assignedTo = assignedUser;
    task.project = project;

    return await this.taskRepository.save(task);
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
