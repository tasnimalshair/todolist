import {
  Body,
  Controller, Get, Post, UseInterceptors
} from '@nestjs/common';
import { Transaction, User } from 'src/decorators';
import { UserService } from './user.service';
import { SharedKanbanBoardDto } from 'src/shared-kanban-board/dtos/create-shared-kanban-board.dto';
import { TransactionInterceptor } from 'src/interceptor/transaction.interceptor';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';

@Controller('users')
@UseInterceptors(TransactionInterceptor)
export class UserController {
  constructor(private userService: UserService,
    private sharedService: SharedKanbanBoardService) { }

  @Post()
  addParticipant(@User() user, @Body() body: SharedKanbanBoardDto, @Transaction() transaction) {
    return this.sharedService.create(body, user.id, transaction);
  }

  @UseInterceptors(TransactionInterceptor)
  @Get()
  deleteParticipant(@Transaction() Transaction, @User() user, @Body() body, @Transaction() transaction) {
    // return this.userService.deleteParticipant(body, user.id, transaction);
    return this.sharedService.delete(body, user.id, transaction);

  }
}