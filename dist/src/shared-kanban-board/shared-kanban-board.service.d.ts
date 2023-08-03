import { SharedKanbanBoard } from './shared-kanban-board.model';
import { FindOptions } from 'sequelize';
import { SharedKanbanBoardDto } from './dtos/create-shared-kanban-board.dto';
export declare class SharedKanbanBoardService {
    private sharedModel;
    constructor(sharedModel: typeof SharedKanbanBoard);
    create(createDto: SharedKanbanBoardDto): Promise<SharedKanbanBoard>;
    get(userId: number): Promise<number[]>;
    find(options: FindOptions): Promise<SharedKanbanBoard[]>;
    findOne(options: FindOptions): Promise<SharedKanbanBoard>;
    delete(dto: SharedKanbanBoardDto): Promise<number>;
}
