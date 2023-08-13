"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanModule = void 0;
const common_1 = require("@nestjs/common");
const kanban_controller_1 = require("./kanban.controller");
const kanban_service_1 = require("./kanban.service");
const kanban_provider_1 = require("./kanban.provider");
const task_module_1 = require("../task/task.module");
const shared_kanban_board_module_1 = require("../shared-kanban-board/shared-kanban-board.module");
const db_module_1 = require("../db/db.module");
let KanbanModule = class KanbanModule {
};
KanbanModule = __decorate([
    (0, common_1.Module)({
        controllers: [kanban_controller_1.KanbanController],
        providers: [kanban_service_1.KanbanService, ...kanban_provider_1.KanbanProvider],
        exports: [kanban_service_1.KanbanService],
        imports: [(0, common_1.forwardRef)(() => task_module_1.TaskModule), (0, common_1.forwardRef)(() => shared_kanban_board_module_1.SharedKanbanBoardModule), db_module_1.DatabaseModule]
    })
], KanbanModule);
exports.KanbanModule = KanbanModule;
//# sourceMappingURL=kanban.module.js.map