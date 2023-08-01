import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,

} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { User } from '../decorators/user.decorator';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../roles/role.enum';
import { UpdateTaskDto } from './dtos/update-task.dto';


@Controller('tasks')
@Roles(Role.Admin)
export class TaskController {
  constructor(private taskService: TaskService) { }


  // TODO: USERID known after pipe validation
  @Roles(Role.User)
  @Post()
  async addTask(@Body() body: CreateTaskDto, @User() user) {
    console.log('UUUUUUUUUUSER',user.id);
    
    await this.taskService.addTask(body.name, body.description, body.priority, user.id);
    return 'Task Added Successfully.';
  }


  @Get()
  @Roles(Role.User)
  async getAllTasks(@User() user) {
    const tasks = await this.taskService.getTasks({ where: { userId: user.id } });
    return tasks;
  }


  @Delete(':id')
  async deleteTask(@Param('id') id: number, @User() user) {
    await this.taskService.deleteTask(id, user.id);
    return `Task with id ${id} was Deleted Successfully`;
  }


  @Post(':id')
  @Roles(Role.User)
  async updateTask(
    @Param('id') id: number,
    @Body() body: UpdateTaskDto,
    @User() user
  ) {

    console.log('user.id',user.id);
    const task = await this.taskService.updateTask(id, body, user.id);
    return `Task with id ${id} was Updated Successfully`;
  }

}
