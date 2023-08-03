"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedKanbanProvider = void 0;
const constants_1 = require("../common/constants");
const shared_kanban_board_model_1 = require("./shared-kanban-board.model");
exports.SharedKanbanProvider = [
    {
        provide: constants_1.REPOSITORIES.SHARED_KANBAN_REPOSITORY,
        useFactory: () => {
            return shared_kanban_board_model_1.SharedKanbanBoard;
        },
    },
];
//# sourceMappingURL=shared-kanban-board.provider.js.map