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
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';


@Controller('tasks')
@Roles(Role.Admin)
export class TaskController {
  constructor(private taskService: TaskService,
    private sharedService: SharedKanbanBoardService) { }


  // TODO: USERID known after pipe validation
  @Roles(Role.User)
  @Post()
  async addTask(@Body() body: CreateTaskDto, @User() user) {
    return await this.taskService.addTask(body.name, body.description, body.priority, user.id, body.kanbanId);
  }


  // user and participant can get the tasks with their kanbans
  @Get(':kanbanId')
  @Roles(Role.User)
  async getAllTasks(@User() user, @Param('kanbanId') kanbanId?) {
    const kanban = this.sharedService.find({ where: { kanbanId } });
    if (!kanban) {
      return 'You do not have access to this kanban';
    }
    const tasks = await this.taskService.getTasks({ where: { userId: user.id || kanbanId } });
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

    const task = await this.taskService.updateTask(id, body, user.id);
    return `Task with id ${id} was Updated Successfully`;
  }

}
