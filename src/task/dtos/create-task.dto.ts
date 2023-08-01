/* eslint-disable prettier/prettier */
import { Optional } from '@nestjs/common';
import { IsString, IsNumber } from 'class-validator';

export class CreateTaskDto {

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  priority: number;

  // @IsNumber({})
  // userId: number; 
}
