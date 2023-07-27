/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsBoolean, IsObject } from 'class-validator';

export class CreateTaskDto {

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  priority: number;

}
