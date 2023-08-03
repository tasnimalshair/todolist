import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GuardModule } from './guard/guard.module';
import configFile from 'config';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './db/db.module';
import { LoggerModule } from './logger/logger.module';
import { KanbanModule } from './kanban/kanban.module';
import { SharedKanbanBoardModule } from './shared-kanban-board/shared-kanban-board.module';


@Module({
  imports: [
    TaskModule,
    UserModule,
    AuthModule,
    GuardModule,
    KanbanModule,
    SharedKanbanBoardModule,
    DatabaseModule,
    LoggerModule,
    ConfigModule.forRoot({
      load: [configFile],
      isGlobal: true,
    }),
    KanbanModule,
    SharedKanbanBoardModule,
  ],

})
export class AppModule {
}
