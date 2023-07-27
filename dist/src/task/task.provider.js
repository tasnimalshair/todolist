"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskProvider = void 0;
const constants_1 = require("../common/constants");
const task_model_1 = require("./task.model");
exports.TaskProvider = [
    {
        provide: constants_1.REPOSITORIES.TASK_REPOSITORY,
        useFactory: () => {
            return task_model_1.Task;
        },
    },
];
//# sourceMappingURL=task.provider.js.map