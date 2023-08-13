"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const task_controller_1 = require("./task.controller");
const task_service_1 = require("./task.service");
const task_provider_1 = require("./task.provider");
const kanban_module_1 = require("../kanban/kanban.module");
const db_module_1 = require("../db/db.module");
const shared_kanban_board_module_1 = require("../shared-kanban-board/shared-kanban-board.module");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    (0, common_1.Module)({
        providers: [task_service_1.TaskService, ...task_provider_1.TaskProvider],
        imports: [(0, common_1.forwardRef)(() => shared_kanban_board_module_1.SharedKanbanBoardModule), (0, common_1.forwardRef)(() => kanban_module_1.KanbanModule), db_module_1.DatabaseModule],
        controllers: [task_controller_1.TaskController],
        exports: [task_service_1.TaskService]
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map