import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { returnRes } from 'shared/commons';
import { UserService } from 'src/user/user.service';
import { UserId } from 'src/decorators/user.decorator';
import { TokenAuthGuard } from 'src/guard/TokenAuthGuard';


@Controller('task')
@UseGuards(TokenAuthGuard)
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Post()
  async addTask(@Res() res, @Body() body: CreateTaskDto, @UserId() userId) {
    await this.taskService.addTask(body.name, body.description, body.priority, userId);
    returnRes(res, 200, true, 'Task Added Successfully.', []);
  }


  @Get()
  async getAllTasks(@Res() res, @UserId() userId) {
    const tasks = await this.taskService.getTasks(userId);
    returnRes(res, 200, true, '', tasks);
  }


  @Delete(':id')
  async deleteTask(@Res() res, @Param('id') id: number, @UserId() userId) {
    await this.taskService.deleteTask(id, userId);
    returnRes(
      res,
      200,
      true,
      `Task with id ${id} was Deleted Successfully`,
      [],
    );
  }

  @Post(':id')
  async updateTask(
    @Res() res,
    @Param('id') id: number,
    @Body() body: CreateTaskDto,
    @UserId() userId
  ) {
    const task = await this.taskService.updateTask(id, body, userId);
    returnRes(
      res,
      200,
      true,
      `Task with id ${id} was Updated Successfully`,
      task,
    );
  }

}
