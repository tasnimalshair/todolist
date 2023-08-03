import { Kanban } from './kanban.model';
import { FindOptions } from 'sequelize';
import { TaskService } from '../task/task.service';
import { SharedKanbanBoardService } from '../shared-kanban-board/shared-kanban-board.service';
export declare class KanbanService {
    private kanbanModel;
    private taskService;
    private sharedKanbanService;
    constructor(kanbanModel: typeof Kanban, taskService: TaskService, sharedKanbanService: SharedKanbanBoardService);
    create(userId: string): Promise<Kanban>;
    findAll(userId: number): Promise<string>;
    findBy(options: FindOptions): Promise<Kanban[]>;
    findOne(options: FindOptions): Promise<Kanban>;
    delete(id: number, userId: string): Promise<string | number>;
}
