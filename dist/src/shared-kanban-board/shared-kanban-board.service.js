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
let SharedKanbanBoardService = class SharedKanbanBoardService {
    constructor(sharedModel) {
        this.sharedModel = sharedModel;
    }
    create(createDto) {
        return this.sharedModel.create({ kanbanId: createDto.kanbanId, userId: createDto.userId });
    }
    async get(userId) {
        const shared = await this.sharedModel.findAll({ where: { userId }, attributes: ['kanbanId'] });
        return shared.map(s => s.kanbanId);
    }
    find(options) {
        return this.sharedModel.findAll(options);
    }
    findOne(options) {
        return this.sharedModel.findOne(options);
    }
    delete(dto) {
        return this.sharedModel.destroy({ where: { userId: dto.userId, kanbanId: dto.kanbanId } });
    }
};
SharedKanbanBoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.SHARED_KANBAN_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], SharedKanbanBoardService);
exports.SharedKanbanBoardService = SharedKanbanBoardService;
//# sourceMappingURL=shared-kanban-board.service.js.map