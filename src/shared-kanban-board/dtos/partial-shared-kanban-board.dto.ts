import { PartialType } from "@nestjs/mapped-types";
import { SharedKanbanBoardDto } from "./create-shared-kanban-board.dto";

export class PartialSharedKanbanBoardDto extends PartialType(SharedKanbanBoardDto) { }