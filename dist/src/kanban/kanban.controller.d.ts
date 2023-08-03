import { KanbanService } from './kanban.service';
export declare class KanbanController {
    private kanbanService;
    constructor(kanbanService: KanbanService);
    create(user: any): Promise<import("./kanban.model").Kanban>;
    getAll(user: any): Promise<string>;
    delete(id: any, user: any): Promise<string | number>;
}
