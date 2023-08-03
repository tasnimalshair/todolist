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
exports.KanbanController = void 0;
const common_1 = require("@nestjs/common");
const kanban_service_1 = require("./kanban.service");
const decorators_1 = require("../decorators");
let KanbanController = class KanbanController {
    constructor(kanbanService) {
        this.kanbanService = kanbanService;
    }
    create(user) {
        return this.kanbanService.create(user.id);
    }
    getAll(user) {
        return this.kanbanService.findAll(user.id, user.id);
    }
    delete(id, user) {
        return this.kanbanService.delete(id, user.id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KanbanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KanbanController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KanbanController.prototype, "delete", null);
KanbanController = __decorate([
    (0, common_1.Controller)('kanbans'),
    __metadata("design:paramtypes", [kanban_service_1.KanbanService])
], KanbanController);
exports.KanbanController = KanbanController;
//# sourceMappingURL=kanban.controller.js.map