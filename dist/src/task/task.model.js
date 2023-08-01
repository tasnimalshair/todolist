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
exports.Task = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../user/user.model");
const { DATE, NUMBER, STRING } = sequelize_typescript_1.DataType;
let Task = class Task extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Task.prototype, "priority", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)(NUMBER),
    __metadata("design:type", Number)
], Task.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Task.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(DATE),
    __metadata("design:type", Date)
], Task.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], Task.prototype, "createdBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], Task.prototype, "updatedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(STRING),
    __metadata("design:type", String)
], Task.prototype, "deletedBy", void 0);
Task = __decorate([
    (0, sequelize_typescript_1.Table)({
        paranoid: true,
    })
], Task);
exports.Task = Task;
//# sourceMappingURL=task.model.js.map