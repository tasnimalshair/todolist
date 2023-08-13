import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,

} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { User } from '../decorators/user.decorator';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../roles/role.enum';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { Transaction } from 'src/decorators';
import { TransactionInterceptor } from 'src/interceptor/transaction.interceptor';


@Controller('tasks')
@Roles(Role.Admin)
@UseInterceptors(TransactionInterceptor)
export class TaskController {
  constructor(private taskService: TaskService,
  ) { }


  @Roles(Role.User)
  @Post()
  addTask(@Body() body: CreateTaskDto, @User() user, @Transaction() transaction) {
    return this.taskService.addTask(body, user.id, transaction);
  }

  @Get(':kanbanId')
  @Roles(Role.User)
  async getAllTasks(@User() user, @Transaction() transaction, @Param('kanbanId') kanbanId?) {
    return this.taskService.getTasks({ where: { user_id: user.id || kanbanId } }, kanbanId, transaction);
  }


  @Delete(':id')
  async deleteTask(@Param('id') id: number, @User() user, @Transaction() transaction) {
    return this.taskService.deleteTask(id, user.id, transaction);
  }


  @Post(':id')
  @Roles(Role.User)
  async updateTask(
    @Param('id') id: number,
    @Body() body: UpdateTaskDto,
    @User() user,
    @Transaction() transaction
  ) {

     return this.taskService.updateTask(id, body, user.id, transaction);
  }

}
