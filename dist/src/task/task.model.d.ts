import { Model } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
export declare class Task extends Model<Task> {
    id: number;
    name: string;
    description: string;
    priority: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User;
}
