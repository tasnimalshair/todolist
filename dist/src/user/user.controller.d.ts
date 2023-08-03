import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addParticipant(user: any, body: any): Promise<"You do not have this Kanban" | import("../shared-kanban-board/shared-kanban-board.model").SharedKanbanBoard>;
    deleteParticipant(user: any, body: any): Promise<string>;
}
