"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanProvider = void 0;
const constants_1 = require("../common/constants");
const kanban_model_1 = require("./kanban.model");
exports.KanbanProvider = [
    {
        provide: constants_1.REPOSITORIES.KANBAN_REPOSITORY,
        useFactory: () => {
            return kanban_model_1.Kanban;
        },
    },
];
//# sourceMappingURL=kanban.provider.js.map