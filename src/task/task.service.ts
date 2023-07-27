import { Inject, Injectable, NotFoundException, Optional } from '@nestjs/common';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { REPOSITORIES } from 'src/common/constants';
import { User } from 'src/user/user.model';
// import { User } from 'src/auth/user.model';

@Injectable()
export class TaskService {
  constructor(
    @Inject(REPOSITORIES.TASK_REPOSITORY)
    private taskModel: typeof Task,
  ) { }


  async addTask(name: string, description: string, priority: number, userId: number) {
    return await this.taskModel.create({ name, description, priority, userId });
  }


  async getTasks(id) {
    return await this.taskModel.findAll({ where: { userId: id } });
  }


  async deleteTask(id: number, userId: string) {
    this.taskModel.destroy({ where: { id, userId } });
  }

  async updateTask(id: number, task: UpdateTaskDto, userId: string) {
    const [updatedRows] = await this.taskModel.update(task, { where: { id, userId } });
    if (updatedRows === 0) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
    return await this.taskModel.findByPk(id);
  }

}
