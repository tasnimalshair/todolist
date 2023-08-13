import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProvider } from './user.provider';
import { SharedKanbanBoardModule } from 'src/shared-kanban-board/shared-kanban-board.module';
import { KanbanModule } from 'src/kanban/kanban.module';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, ...UserProvider],
  imports: [forwardRef(() => SharedKanbanBoardModule), KanbanModule, DatabaseModule]
})
export class UserModule { }
