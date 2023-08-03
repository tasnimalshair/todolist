import { IsNumber } from "class-validator";

export class CreateKanbanDto {
    @IsNumber()
    userId: number;
}