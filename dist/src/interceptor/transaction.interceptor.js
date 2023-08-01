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
exports.TransactionInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const sequelize_typescript_1 = require("sequelize-typescript");
let TransactionInterceptor = class TransactionInterceptor {
    constructor(sequelize) {
        this.sequelize = sequelize;
    }
    async intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const transaction = await this.sequelize.transaction();
        req.transaction = transaction;
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            transaction.commit();
        }), (0, rxjs_1.catchError)(err => {
            transaction.rollback();
            throw new Error(err);
        }));
    }
};
TransactionInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('sequelize')),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize])
], TransactionInterceptor);
exports.TransactionInterceptor = TransactionInterceptor;
//# sourceMappingURL=transaction.interceptor.js.map