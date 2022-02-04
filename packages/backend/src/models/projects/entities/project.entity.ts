import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

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

  // @Column({ type: 'varchar' })
  @ManyToOne(() => Profile, (profile) => profile.createdProjects)
  author: Profile;

  @Column({ type: 'varchar' })
  jobPosition: string;

  //   @OneToOne(() => User, (user) => user.profile)
  //   user: User;
}
