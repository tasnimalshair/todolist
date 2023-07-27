import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addTask(res: any, body: CreateTaskDto, userId: any): Promise<void>;
    getAllTasks(res: any, userId: any): Promise<void>;
    deleteTask(res: any, id: number, userId: any): Promise<void>;
    updateTask(res: any, id: number, body: CreateTaskDto, userId: any): Promise<void>;
}
