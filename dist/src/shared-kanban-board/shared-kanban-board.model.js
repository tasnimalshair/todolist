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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedKanbanBoard = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const kanban_model_1 = require("../kanban/kanban.model");
const user_model_1 = require("../user/user.model");
const { NUMBER, DATE, STRING } = sequelize_typescript_1.DataType;
let SharedKanbanBoard = class SharedKanbanBoard extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], SharedKanbanBoard.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => kanban_model_1.Kanban),
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], SharedKanbanBoard.prototype, "kanbanId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User, 'userId'),
    __metadata("design:type", user_model_1.User)
], SharedKanbanBoard.prototype, "sharedByUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => kanban_model_1.Kanban, 'kanbanId'),
    __metadata("design:type", kanban_model_1.Kanban)
], SharedKanbanBoard.prototype, "kanbanBoard", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], SharedKanbanBoard.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], SharedKanbanBoard.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], SharedKanbanBoard.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], SharedKanbanBoard.prototype, "createdBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], SharedKanbanBoard.prototype, "updatedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], SharedKanbanBoard.prototype, "deletedBy", void 0);
SharedKanbanBoard = __decorate([
    (0, sequelize_typescript_1.Table)({
        paranoid: true,
    })
], SharedKanbanBoard);
exports.SharedKanbanBoard = SharedKanbanBoard;
//# sourceMappingURL=shared-kanban-board.model.js.map