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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const update_task_dto_1 = require("./dtos/update-task.dto");
const constants_1 = require("../common/constants");
const kanban_service_1 = require("../kanban/kanban.service");
const create_task_dto_1 = require("./dtos/create-task.dto");
const decorators_1 = require("../decorators");
const shared_kanban_board_service_1 = require("../shared-kanban-board/shared-kanban-board.service");
let TaskService = class TaskService {
    constructor(taskModel, kanbanService, sharedService) {
        this.taskModel = taskModel;
        this.kanbanService = kanbanService;
        this.sharedService = sharedService;
    }
    async addTask(createDto, user_id, transaction) {
        const kanban = await this.kanbanService.findOne({ where: { id: createDto.kanbanId, user_id } }, transaction);
        if (!kanban) {
            return `Sorry you do not have access to kanban with id ${createDto.kanbanId}`;
        }
        const createdTask = await this.taskModel.create({ ...createDto, createdBy: user_id }, { transaction });
        createdTask.userId = user_id;
        (await createdTask).save();
        return 'Task Added Successfully.';
    }
    getTasks(options, kanbanId, transaction) {
        const kanban = this.sharedService.find({ where: { kanban_id: kanbanId } }, transaction);
        if (!kanban) {
            return 'You do not have access to this kanban';
        }
        return this.taskModel.findAll({ ...options, transaction });
    }
    async deleteTask(id, userId, transaction) {
        const taskToDelete = await this.taskModel.findOne({ where: { id, userId }, transaction });
        if (!taskToDelete) {
            throw new common_1.NotFoundException('Task not found');
        }
        taskToDelete.deletedBy = userId;
        taskToDelete.deletedAt = new Date();
        (await taskToDelete).save();
        await this.taskModel.destroy({ where: { id, userId: userId.toString() } });
        return `Task with id ${id} was Deleted Successfully`;
    }
    async updateTask(id, task, userId, transaction) {
        const _task = await this.taskModel.findOne({ where: { id, userId }, transaction });
        if (!_task) {
            return 'No task with this id!';
        }
        const [updatedRows] = await this.taskModel.update({ ...task }, { where: { id, userId }, transaction });
        if (updatedRows === 0) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found.`);
        }
        _task.updatedBy = userId;
        _task.updatedAt = new Date();
        (await _task).save();
        return `Task with id ${id} was Updated Successfully`;
    }
};
__decorate([
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Number, Object]),
    __metadata("design:returntype", Promise)
], TaskService.prototype, "addTask", null);
__decorate([
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", void 0)
], TaskService.prototype, "getTasks", null);
__decorate([
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], TaskService.prototype, "deleteTask", null);
__decorate([
    __param(3, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_task_dto_1.UpdateTaskDto, Number, Object]),
    __metadata("design:returntype", Promise)
], TaskService.prototype, "updateTask", null);
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.TASK_REPOSITORY)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => kanban_service_1.KanbanService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => shared_kanban_board_service_1.SharedKanbanBoardService))),
    __metadata("design:paramtypes", [Object, kanban_service_1.KanbanService,
        shared_kanban_board_service_1.SharedKanbanBoardService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map