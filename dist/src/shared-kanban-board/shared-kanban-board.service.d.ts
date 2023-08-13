import { SharedKanbanBoard } from './shared-kanban-board.model';
import { FindOptions } from 'sequelize';
import { SharedKanbanBoardDto } from './dtos/create-shared-kanban-board.dto';
import { KanbanService } from 'src/kanban/kanban.service';
import { UserService } from 'src/user/user.service';
export declare class SharedKanbanBoardService {
    private sharedModel;
    private kanbanService;
    private userService;
    constructor(sharedModel: typeof SharedKanbanBoard, kanbanService: KanbanService, userService: UserService);
    create(createDto: SharedKanbanBoardDto, user_id: number, transaction: any): Promise<string | SharedKanbanBoard>;
    get(userId: number, transaction: any): Promise<number[]>;
    find(options: FindOptions, transaction: any): Promise<SharedKanbanBoard[]>;
    findOne(options: FindOptions, transaction: any): Promise<SharedKanbanBoard>;
    delete(dto: SharedKanbanBoardDto, user_id: number, transaction: any): Promise<"You do not have this Kanban" | "No relation between this user and this kanban" | "Deleted Successfully">;
}
