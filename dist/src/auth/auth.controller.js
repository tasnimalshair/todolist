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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_signin_dto_1 = require("./dtos/create-signin.dto");
const create_signup_dto_1 = require("./dtos/create-signup.dto");
const decorators_1 = require("../decorators");
const transaction_interceptor_1 = require("../interceptor/transaction.interceptor");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(userData, transaction) {
        return this.authService.signup(userData, transaction);
    }
    login(userData, transaction) {
        return this.authService.signin(userData, transaction);
    }
};
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(transaction_interceptor_1.TransactionInterceptor),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signup_dto_1.CreateSignupUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(transaction_interceptor_1.TransactionInterceptor),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signin_dto_1.CreateSigninUserDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map