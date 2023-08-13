import { Model } from 'sequelize-typescript';
import { Task } from 'src/task/task.model';
import { User } from 'src/user/user.model';
export declare class Kanban extends Model<Kanban> {
    id: number;
    userId: number;
    user: User;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
    sharedWithUsers: User[];
}
