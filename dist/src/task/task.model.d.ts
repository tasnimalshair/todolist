import { Model } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Kanban } from 'src/kanban/kanban.model';
export declare class Task extends Model<Task> {
    id: number;
    name: string;
    description: string;
    priority: number;
    userId: number;
    user: User;
    kanbanId: number;
    kanban: Kanban;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}
