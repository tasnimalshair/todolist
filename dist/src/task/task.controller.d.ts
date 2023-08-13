import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addTask(body: CreateTaskDto, user: any, transaction: any): Promise<string>;
    getAllTasks(user: any, transaction: any, kanbanId?: any): Promise<import("./task.model").Task[] | "You do not have access to this kanban">;
    deleteTask(id: number, user: any, transaction: any): Promise<string>;
    updateTask(id: number, body: UpdateTaskDto, user: any, transaction: any): Promise<string>;
}
