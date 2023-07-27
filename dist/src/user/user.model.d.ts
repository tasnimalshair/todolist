import { Model } from 'sequelize-typescript';
import { Task } from 'src/task/task.model';
export declare class User extends Model<User> {
    id: number;
    name: string;
    email: string;
    password: string;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
}
