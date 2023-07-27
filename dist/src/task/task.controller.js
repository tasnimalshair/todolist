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
const commons_1 = require("../../shared/commons");
const user_decorator_1 = require("../decorators/user.decorator");
const TokenAuthGuard_1 = require("../guard/TokenAuthGuard");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async addTask(res, body, userId) {
        await this.taskService.addTask(body.name, body.description, body.priority, userId);
        (0, commons_1.returnRes)(res, 200, true, 'Task Added Successfully.', []);
    }
    async getAllTasks(res, userId) {
        const tasks = await this.taskService.getTasks(userId);
        (0, commons_1.returnRes)(res, 200, true, '', tasks);
    }
    async deleteTask(res, id, userId) {
        await this.taskService.deleteTask(id, userId);
        (0, commons_1.returnRes)(res, 200, true, `Task with id ${id} was Deleted Successfully`, []);
    }
    async updateTask(res, id, body, userId) {
        const task = await this.taskService.updateTask(id, body, userId);
        (0, commons_1.returnRes)(res, 200, true, `Task with id ${id} was Updated Successfully`, task);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_task_dto_1.CreateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_task_dto_1.CreateTaskDto, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    (0, common_1.UseGuards)(TokenAuthGuard_1.TokenAuthGuard),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map