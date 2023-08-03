import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
export declare class TaskController {
    private taskService;
    private sharedService;
    constructor(taskService: TaskService, sharedService: SharedKanbanBoardService);
    addTask(body: CreateTaskDto, user: any): Promise<string>;
    getAllTasks(user: any, kanbanId?: any): Promise<import("./task.model").Task[] | "You do not have access to this kanban">;
    deleteTask(id: number, user: any): Promise<string>;
    updateTask(id: number, body: UpdateTaskDto, user: any): Promise<string>;
}
