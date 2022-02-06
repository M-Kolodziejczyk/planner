import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Profile } from '../../users/entities/profile.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  status: string;

  @ManyToOne(() => Profile, (profile) => profile.createdProjects)
  author: Profile;
}
