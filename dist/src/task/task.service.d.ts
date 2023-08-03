import { Task } from './task.model';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { LoggerService } from '../logger/logger.service';
import { FindOptions } from 'sequelize';
import { KanbanService } from 'src/kanban/kanban.service';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
import { CreateTaskDto } from './dtos/create-task.dto';
export declare class TaskService {
    private taskModel;
    private kanbanService;
    private logger;
    private sharedService;
    constructor(taskModel: typeof Task, kanbanService: KanbanService, logger: LoggerService, sharedService: SharedKanbanBoardService);
    addTask(createDto: CreateTaskDto, userId: number): Promise<string>;
    getTasks(options: FindOptions): Promise<Task[]>;
    deleteTask(id: number, userId: string): Promise<void>;
    updateTask(id: number, task: UpdateTaskDto, userId: string): Promise<Task | "No task with this id!">;
}
