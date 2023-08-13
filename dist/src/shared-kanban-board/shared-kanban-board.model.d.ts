import { Model } from 'sequelize-typescript';
import { Kanban } from '../kanban/kanban.model';
import { User } from 'src/user/user.model';
export declare class SharedKanbanBoard extends Model<SharedKanbanBoard> {
    userId: number;
    kanbanId: number;
    sharedByUser: User;
    kanbanBoard: Kanban;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}
