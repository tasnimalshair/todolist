import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.model';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { TaskProvider } from './task.provider';
import { KanbanModule } from 'src/kanban/kanban.module';
import { DatabaseModule } from '../db/db.module';
import { SharedKanbanBoardModule } from '../shared-kanban-board/shared-kanban-board.module';


@Module({
  providers: [TaskService, ...TaskProvider],
  imports: [forwardRef(() => SharedKanbanBoardModule), forwardRef(() => KanbanModule), DatabaseModule],
  controllers: [TaskController],
  exports: [TaskService]
})
export class TaskModule { }
