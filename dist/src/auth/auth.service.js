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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const transaction_decorator_1 = require("../decorators/transaction.decorator");
const create_signup_dto_1 = require("./dtos/create-signup.dto");
const create_signin_dto_1 = require("./dtos/create-signin.dto");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signup(createSignupUserDto, transaction) {
        const _user = await this.userService.findOne({ where: { email: createSignupUserDto.email } }, transaction);
        if (_user) {
            throw new common_1.BadRequestException('Email already exists ,please change it.');
        }
        const encryptedPass = (0, bcryptjs_1.hashSync)(createSignupUserDto.password, 10);
        createSignupUserDto.password = encryptedPass;
        const user = await this.userService.create(createSignupUserDto, transaction);
        return user;
    }
    async signin(createSigninUserDto, transaction) {
        const user = await this.userService.findOne({ where: { email: createSigninUserDto.email } }, transaction);
        if (!user) {
            throw new common_1.NotFoundException('User not found.');
        }
        const isPass = (0, bcryptjs_1.compareSync)(createSigninUserDto.password, user.password);
        if (!isPass) {
            throw new common_1.BadRequestException();
        }
        return this.jwtService.sign({ id: user.id });
    }
};
__decorate([
    __param(1, (0, transaction_decorator_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signup_dto_1.CreateSignupUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "signup", null);
__decorate([
    __param(1, (0, transaction_decorator_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signin_dto_1.CreateSigninUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "signin", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map