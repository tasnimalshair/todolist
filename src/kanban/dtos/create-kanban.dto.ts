import { IsNumber, IsString } from "class-validator";

export class CreateKanbanDto {
    @IsString()
    userId: string;
}