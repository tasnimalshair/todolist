"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialSharedKanbanBoardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shared_kanban_board_dto_1 = require("./create-shared-kanban-board.dto");
class PartialSharedKanbanBoardDto extends (0, mapped_types_1.PartialType)(create_shared_kanban_board_dto_1.SharedKanbanBoardDto) {
}
exports.PartialSharedKanbanBoardDto = PartialSharedKanbanBoardDto;
//# sourceMappingURL=partial-shared-kanban-board.dto.js.map