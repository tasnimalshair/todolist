import { REPOSITORIES } from '../common/constants';
import { Kanban } from './kanban.model';

export const KanbanProvider = [
    {
        provide: REPOSITORIES.KANBAN_REPOSITORY,
        useFactory: () => {
            return Kanban;
        },
    },
];