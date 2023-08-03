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
exports.KanbanService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../common/constants");
const task_service_1 = require("../task/task.service");
const shared_kanban_board_service_1 = require("../shared-kanban-board/shared-kanban-board.service");
const task_model_1 = require("../task/task.model");
let KanbanService = class KanbanService {
    constructor(kanbanModel, taskService, sharedKanbanService) {
        this.kanbanModel = kanbanModel;
        this.taskService = taskService;
        this.sharedKanbanService = sharedKanbanService;
    }
    create(userId) {
        return this.kanbanModel.create({ userId });
    }
    async findAll(userId) {
        const sharedKanbans = await this.sharedKanbanService.get(userId);
        const shared = await this.kanbanModel.findAll({ where: { id: sharedKanbans.map(s => s) }, include: [task_model_1.Task] });
        const realKanbans = await this.kanbanModel.findAll({ where: { userId }, include: [task_model_1.Task] });
        return `realKanbans:${JSON.stringify(realKanbans)} \r sharedKanbans:${JSON.stringify(shared)}`;
    }
    findBy(options) {
        return this.kanbanModel.findAll(options);
    }
    findOne(options) {
        return this.kanbanModel.findOne(options);
    }
    async delete(id, userId) {
        const kanban = await this.findOne({ where: { id, userId } });
        if (!kanban) {
            return `You do not have access to kanban ${id}`;
        }
        (await kanban).deletedBy = userId;
        (await kanban).save();
        return this.kanbanModel.destroy({ where: { id, userId } });
    }
};
KanbanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.KANBAN_REPOSITORY)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => task_service_1.TaskService))),
    __metadata("design:paramtypes", [Object, task_service_1.TaskService,
        shared_kanban_board_service_1.SharedKanbanBoardService])
], KanbanService);
exports.KanbanService = KanbanService;
//# sourceMappingURL=kanban.service.js.map