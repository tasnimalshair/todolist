import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { REPOSITORIES } from '../common/constants';
import { Kanban } from './kanban.model';
import { FindOptions } from 'sequelize';
import { TaskService } from '../task/task.service';
import { SharedKanbanBoardService } from '../shared-kanban-board/shared-kanban-board.service';
import { Task } from 'src/task/task.model';
import { Transaction } from 'src/decorators';


@Injectable()
export class KanbanService {
    constructor(
        @Inject(REPOSITORIES.KANBAN_REPOSITORY)
        private kanbanModel: typeof Kanban,
        @Inject(forwardRef(() => TaskService))
        private taskService: TaskService,
        @Inject(forwardRef(() => SharedKanbanBoardService))
        private sharedKanbanService: SharedKanbanBoardService) { }

    async create(userId: number, @Transaction() transaction) {
        return this.kanbanModel.create({ userId, createdBy: userId });
    }


    async findAll(userId: number, @Transaction() transaction) {
        const sharedKanbans = await this.sharedKanbanService.get(userId, transaction);
        const shared = await this.kanbanModel.findAll({ where: { id: sharedKanbans.map(s => s) }, include: [Task], transaction })
        const realKanbans = await this.kanbanModel.findAll({ where: { userId }, include: [Task], transaction });

        return { data: { ...realKanbans, ...shared } };

    }

    findBy(options: FindOptions, @Transaction() transaction) {
        return this.kanbanModel.findAll({ ...options, transaction });
    }

    findOne(options: FindOptions, @Transaction() transaction) {
        return this.kanbanModel.findOne({ ...options, transaction });
    }


    async delete(id: number, userId: number, @Transaction() transaction) {
        const kanban = await this.findOne({ where: { id, userId } }, transaction);
        if (!kanban) {
            return `You do not have access to kanban ${id}`;
        }
        kanban.deletedBy = userId;
        kanban.deletedAt = new Date();
        await kanban.save();
        return this.kanbanModel.destroy({ where: { id, userId } })
    }


}
