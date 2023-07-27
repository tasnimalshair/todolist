import { Task } from './task.model';
import { UpdateTaskDto } from './dtos/update-task.dto';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: typeof Task);
    addTask(name: string, description: string, priority: number, userId: number): Promise<Task>;
    getTasks(id: any): Promise<Task[]>;
    deleteTask(id: number, userId: string): Promise<void>;
    updateTask(id: number, task: UpdateTaskDto, userId: string): Promise<Task>;
}
