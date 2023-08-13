import { Task } from './task.model';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { FindOptions } from 'sequelize';
import { KanbanService } from '../kanban/kanban.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
export declare class TaskService {
    private taskModel;
    private kanbanService;
    private sharedService;
    constructor(taskModel: typeof Task, kanbanService: KanbanService, sharedService: SharedKanbanBoardService);
    addTask(createDto: CreateTaskDto, user_id: number, transaction: any): Promise<string>;
    getTasks(options: FindOptions, kanbanId: number, transaction: any): "You do not have access to this kanban" | Promise<Task[]>;
    deleteTask(id: number, userId: number, transaction: any): Promise<string>;
    updateTask(id: number, task: UpdateTaskDto, userId: number, transaction: any): Promise<string>;
}
