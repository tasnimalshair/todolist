import { SharedKanbanBoardService } from './shared-kanban-board.service';
export declare class SharedKanbanBoardController {
    private sharedService;
    constructor(sharedService: SharedKanbanBoardService);
    get(user: any): Promise<number[]>;
}
