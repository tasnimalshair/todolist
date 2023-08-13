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
const decorators_1 = require("../decorators");
let KanbanService = class KanbanService {
    constructor(kanbanModel, taskService, sharedKanbanService) {
        this.kanbanModel = kanbanModel;
        this.taskService = taskService;
        this.sharedKanbanService = sharedKanbanService;
    }
    async create(userId, transaction) {
        return this.kanbanModel.create({ userId, createdBy: userId });
    }
    async findAll(userId, transaction) {
        const sharedKanbans = await this.sharedKanbanService.get(userId, transaction);
        const shared = await this.kanbanModel.findAll({ where: { id: sharedKanbans.map(s => s) }, include: [task_model_1.Task], transaction });
        const realKanbans = await this.kanbanModel.findAll({ where: { userId }, include: [task_model_1.Task], transaction });
        return { data: { ...realKanbans, ...shared } };
    }
    findBy(options, transaction) {
        return this.kanbanModel.findAll({ ...options, transaction });
    }
    findOne(options, transaction) {
        return this.kanbanModel.findOne({ ...options, transaction });
    }
    async delete(id, userId, transaction) {
        const kanban = await this.findOne({ where: { id, userId } }, transaction);
        if (!kanban) {
            return `You do not have access to kanban ${id}`;
        }
        kanban.deletedBy = userId;
        kanban.deletedAt = new Date();
        await kanban.save();
        return this.kanbanModel.destroy({ where: { id, userId } });
    }
};
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], KanbanService.prototype, "create", null);
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], KanbanService.prototype, "findAll", null);
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KanbanService.prototype, "findBy", null);
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KanbanService.prototype, "findOne", null);
__decorate([
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], KanbanService.prototype, "delete", null);
KanbanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.KANBAN_REPOSITORY)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => task_service_1.TaskService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => shared_kanban_board_service_1.SharedKanbanBoardService))),
    __metadata("design:paramtypes", [Object, task_service_1.TaskService,
        shared_kanban_board_service_1.SharedKanbanBoardService])
], KanbanService);
exports.KanbanService = KanbanService;
//# sourceMappingURL=kanban.service.js.map