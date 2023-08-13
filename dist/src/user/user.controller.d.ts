import { UserService } from './user.service';
import { SharedKanbanBoardDto } from 'src/shared-kanban-board/dtos/create-shared-kanban-board.dto';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
export declare class UserController {
    private userService;
    private sharedService;
    constructor(userService: UserService, sharedService: SharedKanbanBoardService);
    addParticipant(user: any, body: SharedKanbanBoardDto, transaction: any): Promise<string | import("../shared-kanban-board/shared-kanban-board.model").SharedKanbanBoard>;
    deleteParticipant(Transaction: any, user: any, body: any, transaction: any): Promise<"You do not have this Kanban" | "No relation between this user and this kanban" | "Deleted Successfully">;
}
