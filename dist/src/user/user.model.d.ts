import { Model } from 'sequelize-typescript';
import { Role } from '../roles/role.enum';
import { Task } from '../task/task.model';
import { Kanban } from 'src/kanban/kanban.model';
export declare class User extends Model<User> {
    id: number;
    name: string;
    email: string;
    password: string;
    tasks: Task[];
    kanban: Kanban[];
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
    sharedBoards: Kanban[];
}
