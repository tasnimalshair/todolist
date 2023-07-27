import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.model';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { TaskProvider } from './task.provider';
// import { TaskProvider } from './task.provider';

@Module({
  // exports: [SequelizeModule],
  controllers: [TaskController],
  providers: [TaskService, ...TaskProvider],
})
export class TaskModule { }
