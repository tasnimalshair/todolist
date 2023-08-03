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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const role_enum_1 = require("../roles/role.enum");
const task_model_1 = require("../task/task.model");
const kanban_model_1 = require("../kanban/kanban.model");
const shared_kanban_board_model_1 = require("../shared-kanban-board/shared-kanban-board.model");
const { ENUM, DATE, NUMBER, STRING } = sequelize_typescript_1.DataType;
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => task_model_1.Task),
    __metadata("design:type", Array)
], User.prototype, "tasks", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => kanban_model_1.Kanban),
    __metadata("design:type", Array)
], User.prototype, "kanban", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: ENUM,
        values: Object.keys(role_enum_1.Role)
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], User.prototype, "createdBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], User.prototype, "updatedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], User.prototype, "deletedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => kanban_model_1.Kanban, () => shared_kanban_board_model_1.SharedKanbanBoard, 'sharedByUserId'),
    __metadata("design:type", Array)
], User.prototype, "sharedBoards", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({
        paranoid: true,
    })
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map