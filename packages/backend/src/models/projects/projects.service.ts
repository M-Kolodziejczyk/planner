import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Project } from './entities/project.entity';
import { UsersService } from '../users/users.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private readonly usersService: UsersService,
  ) {}

  async create(projectData: CreateProjectDto) {
    try {
      const profile = await this.usersService.getProfileById(
        projectData.profileId,
      );

      const project = await this.projectRepository.create(projectData);
      project.author = profile;

      return await this.projectRepository.save(project);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async findAll() {
    const projects = await this.projectRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.author', 'author')
      .getMany();
    return projects;
  }

  async findOne(id: string) {
    try {
      const project = await this.projectRepository.findOne({
        where: { id: id },
        relations: ['author'],
      });

      return project;
    } catch (error) {
      return 'erro';
    }
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: string) {
    return await this.projectRepository.delete(id);
  }
}
