import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Res,
    Delete,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { returnRes } from 'shared/commons';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}

  

  }