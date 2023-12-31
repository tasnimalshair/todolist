import { Inject, Injectable, NotFoundException, Optional } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { REPOSITORIES } from 'src/common/constants';
import { LoggerService } from '../logger/logger.service';
import { FindOptions, where } from 'sequelize';

@Injectable()
export class TaskService {
  constructor(
    @Inject(REPOSITORIES.TASK_REPOSITORY)
    private taskModel: typeof Task,
    private logger: LoggerService
  ) { }



  addTask(name: string, description: string, priority: number, userId: number) {
    this.logger.myLog();
    return this.taskModel.create({ name, description, priority, userId });
  }


  getTasks(options: FindOptions) {
    return this.taskModel.findAll(options)
  }

  async deleteTask(id: number, userId: string) {
    const taskToDelete = await this.taskModel.findOne({ where: { id, userId } });

    if (!taskToDelete) {
      throw new NotFoundException('Task not found');
    }
    
    (await taskToDelete).deletedBy = userId;

    (await taskToDelete).save();
    await this.taskModel.destroy({ where: { id, userId } });
  }

  async updateTask(id: number, task: UpdateTaskDto, userId: string) {
    const _task = this.taskModel.findOne({ where: { id, userId } });
    if (!_task) {
      return 'No task with this id!';
    }

    const [updatedRows] = await this.taskModel.update({ ...task }, { where: { id, userId } });
    if (updatedRows === 0) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
    (await _task).updatedBy = userId;
    (await _task).save();

    return _task;
  }

}
