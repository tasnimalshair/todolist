import { Module, forwardRef } from '@nestjs/common';
import { KanbanController } from './kanban.controller';
import { KanbanService } from './kanban.service';
import { KanbanProvider } from './kanban.provider';
import { TaskModule } from '../task/task.module';
import { SharedKanbanBoardModule } from 'src/shared-kanban-board/shared-kanban-board.module';

@Module({
  controllers: [KanbanController],
  providers: [KanbanService, ...KanbanProvider],
  exports: [KanbanService],
  imports: [forwardRef(() => TaskModule), SharedKanbanBoardModule]
})
export class KanbanModule { }
