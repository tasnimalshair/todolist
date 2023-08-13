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
exports.SharedKanbanBoardService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../common/constants");
const create_shared_kanban_board_dto_1 = require("./dtos/create-shared-kanban-board.dto");
const decorators_1 = require("../decorators");
const kanban_service_1 = require("../kanban/kanban.service");
const user_service_1 = require("../user/user.service");
let SharedKanbanBoardService = class SharedKanbanBoardService {
    constructor(sharedModel, kanbanService, userService) {
        this.sharedModel = sharedModel;
        this.kanbanService = kanbanService;
        this.userService = userService;
    }
    async create(createDto, user_id, transaction) {
        console.log('kanbanId', createDto.kanbanId);
        const kanban = await this.kanbanService.findOne({ where: { id: createDto.kanbanId, user_id } }, transaction);
        if (!kanban) {
            return 'You do not have this kanban';
        }
        const user = await this.userService.findById(createDto.userId);
        if (!user) {
            return `No user with id ${createDto.userId}`;
        }
        console.log('zzzzzzzz', createDto);
        const shared = await this.sharedModel.create({ ...createDto, createdBy: user_id }, { transaction });
        return shared;
    }
    async get(userId, transaction) {
        const shared = await this.sharedModel.findAll({ where: { userId: userId }, attributes: ['kanbanId'], transaction });
        return shared.map(s => s.kanbanId);
    }
    find(options, transaction) {
        return this.sharedModel.findAll({ ...options, transaction });
    }
    findOne(options, transaction) {
        return this.sharedModel.findOne({ ...options, transaction });
    }
    async delete(dto, user_id, transaction) {
        const kanban = await this.kanbanService.findOne({ where: { id: dto.kanbanId, user_id } }, transaction);
        if (!kanban) {
            return 'You do not have this Kanban';
        }
        const shared = await this.sharedModel.findOne({ where: { userId: dto.userId, kanbanId: dto.kanbanId } });
        if (!shared) {
            return 'No relation between this user and this kanban';
        }
        shared.deletedBy = user_id;
        (await shared).save();
        await this.sharedModel.destroy({ where: { userId: dto.userId, kanbanId: dto.kanbanId }, transaction });
        return 'Deleted Successfully';
    }
};
__decorate([
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shared_kanban_board_dto_1.SharedKanbanBoardDto, Number, Object]),
    __metadata("design:returntype", Promise)
], SharedKanbanBoardService.prototype, "create", null);
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SharedKanbanBoardService.prototype, "get", null);
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SharedKanbanBoardService.prototype, "find", null);
__decorate([
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SharedKanbanBoardService.prototype, "findOne", null);
__decorate([
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shared_kanban_board_dto_1.SharedKanbanBoardDto, Number, Object]),
    __metadata("design:returntype", Promise)
], SharedKanbanBoardService.prototype, "delete", null);
SharedKanbanBoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.SHARED_KANBAN_REPOSITORY)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => kanban_service_1.KanbanService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [Object, kanban_service_1.KanbanService,
        user_service_1.UserService])
], SharedKanbanBoardService);
exports.SharedKanbanBoardService = SharedKanbanBoardService;
//# sourceMappingURL=shared-kanban-board.service.js.map