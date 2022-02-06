import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Project } from 'src/models/projects/entities/project.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  jobPosition: string;

  @OneToMany(() => Project, (project) => project.author)
  createdProjects: Project;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
