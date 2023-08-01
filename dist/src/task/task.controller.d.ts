import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addTask(body: CreateTaskDto, user: any): Promise<string>;
    getAllTasks(user: any): Promise<import("./task.model").Task[]>;
    deleteTask(id: number, user: any): Promise<string>;
    updateTask(id: number, body: UpdateTaskDto, user: any): Promise<string>;
}
