import { Controller, Get } from '@nestjs/common';
import { SharedKanbanBoardService } from './shared-kanban-board.service';
import { User } from 'src/decorators';

@Controller('sharedKkanban')
export class SharedKanbanBoardController {
    constructor(private sharedService: SharedKanbanBoardService) { }

    @Get()
    get(@User() user) {
        return this.sharedService.get(user.id);
    }
}
