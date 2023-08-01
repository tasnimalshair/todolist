import { Task } from './task.model';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { LoggerService } from '../logger/logger.service';
import { FindOptions } from 'sequelize';
export declare class TaskService {
    private taskModel;
    private logger;
    constructor(taskModel: typeof Task, logger: LoggerService);
    addTask(name: string, description: string, priority: number, userId: number): Promise<Task>;
    getTasks(options: FindOptions): Promise<Task[]>;
    deleteTask(id: number, userId: string): Promise<void>;
    updateTask(id: number, task: UpdateTaskDto, userId: string): Promise<Task | "No task with this id!">;
}
