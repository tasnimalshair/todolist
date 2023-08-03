import { IsNotEmpty, IsNumber } from "class-validator";

export class SharedKanbanBoardDto {
    @IsNumber()
    @IsNotEmpty()
    kanbanId: number;

    @IsNumber()
    @IsNotEmpty()
    userId: number;
}