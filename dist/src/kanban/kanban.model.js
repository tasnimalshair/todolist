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
exports.Kanban = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const shared_kanban_board_model_1 = require("../shared-kanban-board/shared-kanban-board.model");
const task_model_1 = require("../task/task.model");
const user_model_1 = require("../user/user.model");
const { DATE, NUMBER, STRING, ARRAY, JSON } = sequelize_typescript_1.DataType;
let Kanban = class Kanban extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Kanban.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Kanban.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Kanban.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => task_model_1.Task),
    __metadata("design:type", Array)
], Kanban.prototype, "tasks", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], Kanban.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], Kanban.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], Kanban.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Kanban.prototype, "createdBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Kanban.prototype, "updatedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Kanban.prototype, "deletedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_model_1.User, () => shared_kanban_board_model_1.SharedKanbanBoard, 'kanbanId'),
    __metadata("design:type", Array)
], Kanban.prototype, "sharedWithUsers", void 0);
Kanban = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Kanbans',
        paranoid: true,
        underscored: true
    })
], Kanban);
exports.Kanban = Kanban;
//# sourceMappingURL=kanban.model.js.map