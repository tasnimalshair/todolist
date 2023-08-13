import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { Task } from './task.model';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { REPOSITORIES } from '../common/constants';
import { FindOptions } from 'sequelize';
import { KanbanService } from '../kanban/kanban.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { Transaction } from '../decorators';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';


@Injectable()
export class TaskService {
  constructor(
    @Inject(REPOSITORIES.TASK_REPOSITORY)
    private taskModel: typeof Task,
    @Inject(forwardRef(() => KanbanService))
    private kanbanService: KanbanService,
    @Inject(forwardRef(() => SharedKanbanBoardService))

    private sharedService: SharedKanbanBoardService
  ) { }

  async addTask(createDto: CreateTaskDto, user_id: number, @Transaction() transaction) {

    const kanban = await this.kanbanService.findOne({ where: { id: createDto.kanbanId, user_id } }, transaction);
    if (!kanban) {
      return `Sorry you do not have access to kanban with id ${createDto.kanbanId}`
    }
    const createdTask = await this.taskModel.create({ ...createDto, createdBy: user_id }, { transaction });
    createdTask.userId = user_id;
    (await createdTask).save();
    return 'Task Added Successfully.';
  }


  getTasks(options: FindOptions, kanbanId: number, @Transaction() transaction) {
    const kanban = this.sharedService.find({ where: { kanban_id: kanbanId } }, transaction);
    if (!kanban) {
      return 'You do not have access to this kanban';
    }
    return this.taskModel.findAll({ ...options, transaction })
  }

  async deleteTask(id: number, userId: number, @Transaction() transaction) {
    const taskToDelete = await this.taskModel.findOne({ where: { id, userId }, transaction });

    if (!taskToDelete) {
      throw new NotFoundException('Task not found');
    }

    taskToDelete.deletedBy = userId;
    taskToDelete.deletedAt = new Date();


    (await taskToDelete).save();
    await this.taskModel.destroy({ where: { id, userId: userId.toString() } });
    return `Task with id ${id} was Deleted Successfully`;

  }




  async updateTask(id: number, task: UpdateTaskDto, userId: number, @Transaction() transaction) {
    const _task = await this.taskModel.findOne({ where: { id, userId }, transaction });
    if (!_task) {
      return 'No task with this id!';
    }

    const [updatedRows] = await this.taskModel.update({ ...task }, { where: { id, userId }, transaction });
    if (updatedRows === 0) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
    _task.updatedBy = userId;
    _task.updatedAt = new Date();

    (await _task).save();

    return `Task with id ${id} was Updated Successfully`;
  }

}
