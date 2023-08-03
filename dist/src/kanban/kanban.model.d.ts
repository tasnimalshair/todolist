import { Model } from "sequelize-typescript";
import { Task } from "src/task/task.model";
import { User } from "src/user/user.model";
export declare class Kanban extends Model<Kanban> {
    id: number;
    userId: string;
    user: User;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
    sharedWithUsers: User[];
}
