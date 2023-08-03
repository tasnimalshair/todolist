import {
  Body,
  Controller, Get, Post
} from '@nestjs/common';
import { User } from 'src/decorators';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  addParticipant(@User() user, @Body() body) {
    return this.userService.addParticipant(body.kId, body.uId, user.id);
  }

  @Get()
  deleteParticipant(@User() user, @Body() body) {
    return this.userService.deleteParticipant(body.kId, body.uId, user.id);
  }
}