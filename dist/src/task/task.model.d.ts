import { Model } from 'sequelize-typescript';
import { User } from '../user/user.model';
export declare class Task extends Model<Task> {
    id: number;
    name: string;
    description: string;
    priority: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
}
