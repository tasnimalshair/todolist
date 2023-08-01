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
exports.TokenAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const rules_guard_1 = require("./rules.guard");
const user_service_1 = require("../user/user.service");
let TokenAuthGuard = class TokenAuthGuard {
    constructor(jwtService, reflector, userService) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.userService = userService;
    }
    async canActivate(context) {
        const _isPublic = this.reflector.get('isPublic', context.getHandler());
        if (_isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return false;
        }
        const [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !token) {
            return false;
        }
        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.userService.findById(decoded.id);
            request.user = user.dataValues;
            const roleGuard = new rules_guard_1.RoleGuard(this.reflector);
            return roleGuard.canActivate(context);
        }
        catch (error) {
            return false;
        }
    }
};
TokenAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector,
        user_service_1.UserService])
], TokenAuthGuard);
exports.TokenAuthGuard = TokenAuthGuard;
//# sourceMappingURL=TokenAuthGuard.js.map