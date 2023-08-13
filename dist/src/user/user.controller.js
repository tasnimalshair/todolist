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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../decorators");
const user_service_1 = require("./user.service");
const create_shared_kanban_board_dto_1 = require("../shared-kanban-board/dtos/create-shared-kanban-board.dto");
const transaction_interceptor_1 = require("../interceptor/transaction.interceptor");
const shared_kanban_board_service_1 = require("../shared-kanban-board/shared-kanban-board.service");
let UserController = class UserController {
    constructor(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    addParticipant(user, body, transaction) {
        return this.sharedService.create(body, user.id, transaction);
    }
    deleteParticipant(Transaction, user, body, transaction) {
        return this.sharedService.delete(body, user.id, transaction);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, decorators_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_shared_kanban_board_dto_1.SharedKanbanBoardDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addParticipant", null);
__decorate([
    (0, common_1.UseInterceptors)(transaction_interceptor_1.TransactionInterceptor),
    (0, common_1.Get)(),
    __param(0, (0, decorators_1.Transaction)()),
    __param(1, (0, decorators_1.User)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteParticipant", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseInterceptors)(transaction_interceptor_1.TransactionInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService,
        shared_kanban_board_service_1.SharedKanbanBoardService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map