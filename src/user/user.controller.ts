import {
  Body,
  Controller, Get, Post
} from '@nestjs/common';
import { User } from 'src/decorators';
import { UserService } from './user.service';
import { SharedKanbanBoardDto } from 'src/shared-kanban-board/dtos/create-shared-kanban-board.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  addParticipant(@User() user, @Body() body: SharedKanbanBoardDto) {
    return this.userService.addParticipant(body, user.id);
  }

  @Get()
  deleteParticipant(@User() user, @Body() body) {
    return this.userService.deleteParticipant(body, user.id);
  }
}