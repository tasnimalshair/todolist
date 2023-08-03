/* eslint-disable prettier/prettier */
import { Optional } from '@nestjs/common';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {

  // @IsNumber()
  // id?: number;


  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()

  description: string;

  @IsNumber()
  @IsNotEmpty()
  priority: number;

  // @IsNumber({})
  // userId: number; 

  @IsNumber()
  kanbanId: number;
}
