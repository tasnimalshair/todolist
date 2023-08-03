import { SharedKanbanBoard } from './shared-kanban-board.model';
export declare const SharedKanbanProvider: {
    provide: string;
    useFactory: () => typeof SharedKanbanBoard;
}[];
