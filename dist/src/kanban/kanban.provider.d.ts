import { Kanban } from './kanban.model';
export declare const KanbanProvider: {
    provide: string;
    useFactory: () => typeof Kanban;
}[];
