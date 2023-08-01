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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../common/constants");
const transaction_decorator_1 = require("../decorators/transaction.decorator");
const create_signup_dto_1 = require("../auth/dtos/create-signup.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(createSignupUserDto, transaction) {
        return this.userRepository.create(createSignupUserDto, { transaction });
    }
    findById(id) {
        return this.userRepository.findByPk(id);
    }
    findOne(options, transaction) {
        return this.userRepository.findOne({ ...options, transaction });
    }
};
__decorate([
    __param(1, (0, transaction_decorator_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signup_dto_1.CreateSignupUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "create", null);
__decorate([
    __param(1, (0, transaction_decorator_1.Transaction)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "findOne", null);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPOSITORIES.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map