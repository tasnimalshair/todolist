import { SharedKanbanBoard } from './shared-kanban-board.model';
import { FindOptions } from 'sequelize';
export declare class SharedKanbanBoardService {
    private sharedModel;
    constructor(sharedModel: typeof SharedKanbanBoard);
    create(kId: number, uId: number): Promise<SharedKanbanBoard>;
    get(userId: number): Promise<number[]>;
    find(options: FindOptions): Promise<SharedKanbanBoard[]>;
    findOne(options: FindOptions): Promise<SharedKanbanBoard>;
    delete(userId: number, kanbanId: number): Promise<number>;
}
