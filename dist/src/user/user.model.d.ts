import { Model } from 'sequelize-typescript';
import { Role } from '../roles/role.enum';
import { Task } from '../task/task.model';
export declare class User extends Model<User> {
    id: number;
    name: string;
    email: string;
    password: string;
    tasks: Task[];
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
}
