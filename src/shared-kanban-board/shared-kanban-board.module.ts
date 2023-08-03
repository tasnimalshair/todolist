import { Module } from '@nestjs/common';
import { SharedKanbanBoardController } from './shared-kanban-board.controller';
import { SharedKanbanBoardService } from './shared-kanban-board.service';
import { SharedKanbanProvider } from './shared-kanban-board.provider';

@Module({
  controllers: [SharedKanbanBoardController],
  providers: [SharedKanbanBoardService, ...SharedKanbanProvider],
  exports:[SharedKanbanBoardService]
})
export class SharedKanbanBoardModule {}
