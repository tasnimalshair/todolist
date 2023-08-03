"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const create_task_dto_1 = require("./dtos/create-task.dto");
const user_decorator_1 = require("../decorators/user.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const role_enum_1 = require("../roles/role.enum");
const update_task_dto_1 = require("./dtos/update-task.dto");
const shared_kanban_board_service_1 = require("../shared-kanban-board/shared-kanban-board.service");
let TaskController = class TaskController {
    constructor(taskService, sharedService) {
        this.taskService = taskService;
        this.sharedService = sharedService;
    }
    async addTask(body, user) {
        return await this.taskService.addTask(body.name, body.description, body.priority, user.id, body.kanbanId);
    }
    async getAllTasks(user, kanbanId) {
        const kanban = this.sharedService.find({ where: { kanbanId } });
        if (!kanban) {
            return 'You do not have access to this kanban';
        }
        const tasks = await this.taskService.getTasks({ where: { userId: user.id || kanbanId } });
        return tasks;
    }
    async deleteTask(id, user) {
        await this.taskService.deleteTask(id, user.id);
        return `Task with id ${id} was Deleted Successfully`;
    }
    async updateTask(id, body, user) {
        const task = await this.taskService.updateTask(id, body, user.id);
        return `Task with id ${id} was Updated Successfully`;
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)(':kanbanId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('kanbanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_task_dto_1.UpdateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        shared_kanban_board_service_1.SharedKanbanBoardService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map