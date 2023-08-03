import { REPOSITORIES } from '../common/constants';
import { SharedKanbanBoard } from './shared-kanban-board.model';

export const SharedKanbanProvider = [
    {
        provide: REPOSITORIES.SHARED_KANBAN_REPOSITORY,
        useFactory: () => {
            return SharedKanbanBoard;
        },
    },
];