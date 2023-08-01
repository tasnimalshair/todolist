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
let TaskService = class TaskService {
    constructor(taskModel, logger) {
        this.taskModel = taskModel;
        this.logger = logger;
    }
    addTask(name, description, priority, userId) {
        this.logger.myLog();
        return this.taskModel.create({ name, description, priority, userId });
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
    __metadata("design:paramtypes", [Object, logger_service_1.LoggerService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map