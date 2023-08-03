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
const constants_1 = require("../common/constants");
const logger_service_1 = require("../logger/logger.service");
const kanban_service_1 = require("../kanban/kanban.service");
const shared_kanban_board_service_1 = require("../shared-kanban-board/shared-kanban-board.service");
let TaskService = class TaskService {
    constructor(taskModel, kanbanService, logger, sharedService) {
        this.taskModel = taskModel;
        this.kanbanService = kanbanService;
        this.logger = logger;
        this.sharedService = sharedService;
    }
    async addTask(name, description, priority, userId, kanbanId) {
        this.logger.myLog();
        const kanban = await this.kanbanService.findOne({ where: { id: kanbanId, userId: userId } });
        const sharedKanban = await this.sharedService.find({ where: { kanbanId, userId } });
        if (!kanban && !sharedKanban) {
            return `Sorry you do not have access to kanban with id ${kanbanId}`;
        }
        await this.taskModel.create({ name, description, priority, userId, kanbanId });
        return 'Task Added Successfully.';
    }
    getTasks(options) {
        return this.taskModel.findAll(options);
    }
    async deleteTask(id, userId) {
        const taskToDelete = await this.taskModel.findOne({ where: { id, userId } });
        if (!taskToDelete) {
            throw new common_1.NotFoundException('Task not found');
        }
        (await taskToDelete).deletedBy = userId;
        (await taskToDelete).save();
        await this.taskModel.destroy({ where: { id, userId } });
    }
    async updateTask(id, task, userId) {
        const _task = this.taskModel.findOne({ where: { id, userId } });
        if (!_task) {
            return 'No task with this id!';
        }
        const [updatedRows] = await this.taskModel.update({ ...task }, { where: { id, userId } });
        if (updatedRows === 0) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found.`);
        }
        (await _task).updatedBy = userId;
        (await _task).save();
        return _task;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.TASK_REPOSITORY)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => kanban_service_1.KanbanService))),
    __metadata("design:paramtypes", [Object, kanban_service_1.KanbanService,
        logger_service_1.LoggerService,
        shared_kanban_board_service_1.SharedKanbanBoardService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map