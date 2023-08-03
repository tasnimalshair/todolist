import { UserService } from './user.service';
import { SharedKanbanBoardDto } from 'src/shared-kanban-board/dtos/create-shared-kanban-board.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addParticipant(user: any, body: SharedKanbanBoardDto): Promise<import("../shared-kanban-board/shared-kanban-board.model").SharedKanbanBoard | "You do not have this Kanban">;
    deleteParticipant(user: any, body: any): Promise<string>;
}
