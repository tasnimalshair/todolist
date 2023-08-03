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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../common/constants");
const transaction_decorator_1 = require("../decorators/transaction.decorator");
const create_signup_dto_1 = require("../auth/dtos/create-signup.dto");
const shared_kanban_board_service_1 = require("../shared-kanban-board/shared-kanban-board.service");
const kanban_service_1 = require("../kanban/kanban.service");
let UserService = class UserService {
    constructor(userRepository, sharedKanbanBoardService, kanbanService) {
        this.userRepository = userRepository;
        this.sharedKanbanBoardService = sharedKanbanBoardService;
        this.kanbanService = kanbanService;
    }
    create(createSignupUserDto, transaction) {
        return this.userRepository.create(createSignupUserDto, { transaction });
    }
    findById(id) {
        return this.userRepository.findByPk(id);
    }
    findOne(options, transaction) {
        return this.userRepository.findOne({ ...options, transaction });
    }
    async addParticipant(createDto, userId) {
        const kanban = await this.kanbanService.findOne({ where: { id: createDto.kanbanId, userId: userId } });
        if (!kanban) {
            return 'You do not have this Kanban';
        }
        return this.sharedKanbanBoardService.create(createDto);
    }
    async deleteParticipant(sharedDto, userId) {
        const userid = parseInt(userId);
        const kanban = await this.kanbanService.findOne({ where: { id: sharedDto.kanbanId, userId: userid } });
        if (!kanban) {
            return 'You do not have this Kanban';
        }
        const relation = await this.sharedKanbanBoardService.findOne({ where: { kanbanId: sharedDto.kanbanId, userId: sharedDto.userId } });
        if (!relation) {
            return `Kanban ${sharedDto.kanbanId} does not shared with user ${sharedDto.userId}`;
        }
        (await kanban).deletedBy = userId;
        (await kanban).save();
        await this.sharedKanbanBoardService.delete(sharedDto);
        return 'Deleted Successfully!';
    }
};
__decorate([
    __param(1, (0, transaction_decorator_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signup_dto_1.CreateSignupUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "create", null);
__decorate([
    __param(1, (0, transaction_decorator_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "findOne", null);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object, shared_kanban_board_service_1.SharedKanbanBoardService,
        kanban_service_1.KanbanService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map