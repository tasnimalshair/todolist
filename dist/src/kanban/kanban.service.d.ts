import { Kanban } from './kanban.model';
import { CreateKanbanDto } from './dtos/create-kanban.dto';
import { FindOptions } from 'sequelize';
import { TaskService } from '../task/task.service';
import { SharedKanbanBoardService } from '../shared-kanban-board/shared-kanban-board.service';
import { PartialSharedKanbanBoardDto } from 'src/shared-kanban-board/dtos/partial-shared-kanban-board.dto';
export declare class KanbanService {
    private kanbanModel;
    private taskService;
    private sharedKanbanService;
    constructor(kanbanModel: typeof Kanban, taskService: TaskService, sharedKanbanService: SharedKanbanBoardService);
    create(createKanbanDto: CreateKanbanDto): Promise<Kanban>;
    findAll({ userId }: PartialSharedKanbanBoardDto, createKanbanDto: CreateKanbanDto): Promise<string>;
    findBy(options: FindOptions): Promise<Kanban[]>;
    findOne(options: FindOptions): Promise<Kanban>;
    delete(id: number, userId: string): Promise<string | number>;
}
