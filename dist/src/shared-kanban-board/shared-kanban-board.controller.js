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
exports.SharedKanbanBoardController = void 0;
const common_1 = require("@nestjs/common");
const shared_kanban_board_service_1 = require("./shared-kanban-board.service");
let SharedKanbanBoardController = class SharedKanbanBoardController {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
};
SharedKanbanBoardController = __decorate([
    (0, common_1.Controller)('sharedKkanban'),
    __metadata("design:paramtypes", [shared_kanban_board_service_1.SharedKanbanBoardService])
], SharedKanbanBoardController);
exports.SharedKanbanBoardController = SharedKanbanBoardController;
//# sourceMappingURL=shared-kanban-board.controller.js.map