import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { CatsModule } from './models/cats/cats.module';
import { UsersModule } from './models/users/users.module';
import { ProjectsModule } from './models/projects/projects.module';

import { User } from './models/users/entities/user.entity';
import { Profile } from './models/users/entities/profile.entity';
import { Project } from './models/projects/entities/project.entity';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Profile, Project],
      synchronize: true, // remove before production
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
