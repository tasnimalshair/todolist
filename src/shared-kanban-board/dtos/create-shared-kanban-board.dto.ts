import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class SharedKanbanBoardDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    kanbanId: number;

}