import { Module, forwardRef } from '@nestjs/common';
import { SharedKanbanBoardController } from './shared-kanban-board.controller';
import { SharedKanbanBoardService } from './shared-kanban-board.service';
import { SharedKanbanProvider } from './shared-kanban-board.provider';
import { KanbanModule } from 'src/kanban/kanban.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [SharedKanbanBoardController],
  providers: [SharedKanbanBoardService, ...SharedKanbanProvider],
  exports: [SharedKanbanBoardService],
  imports: [forwardRef(() => KanbanModule), forwardRef(() => UserModule)]
})
export class SharedKanbanBoardModule { }
