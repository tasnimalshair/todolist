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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signup(name, email, password) {
        const users = await this.userService.find(email);
        if (users.length) {
            throw new common_1.BadRequestException('Email already exists ,please change it.');
        }
        const encryptedPass = (0, bcryptjs_1.hashSync)(password, 10);
        const user = await this.userService.create(name, email, encryptedPass);
        return user;
    }
    async signin(email, password) {
        const [user] = await this.userService.find(email);
        if (!user) {
            throw new common_1.NotFoundException('User not found.');
        }
        const isPass = (0, bcryptjs_1.compareSync)(password, user.password);
        if (!isPass) {
            throw new common_1.BadRequestException();
        }
        return await this.jwtService.sign({ id: user.id });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map