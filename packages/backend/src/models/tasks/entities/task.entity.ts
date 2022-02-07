import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Profile } from '../../users/entities/profile.entity';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  status: string;

  @ManyToOne(() => Profile)
  createdBy: Profile;

  @ManyToOne(() => Profile)
  assignedTo: Profile;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
