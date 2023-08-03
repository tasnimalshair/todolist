import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { REPOSITORIES } from '../common/constants';
import { Kanban } from './kanban.model';
import { CreateKanbanDto } from './dtos/create-kanban.dto';
import { FindOptions } from 'sequelize';
import { TaskService } from '../task/task.service';
import { SharedKanbanBoardService } from '../shared-kanban-board/shared-kanban-board.service';
import { Task } from 'src/task/task.model';

@Injectable()
export class KanbanService {
    constructor(
        @Inject(REPOSITORIES.KANBAN_REPOSITORY)
        private kanbanModel: typeof Kanban,
        @Inject(forwardRef(() => TaskService))
        private taskService: TaskService,
        private sharedKanbanService: SharedKanbanBoardService) { }

    create(userId: string) {
        return this.kanbanModel.create({ userId });
    }

    // TODO: how to print json
    async findAll(userId: number) {
        const sharedKanbans = await this.sharedKanbanService.get(userId);
        const shared = await this.kanbanModel.findAll({ where: { id: sharedKanbans.map(s => s) }, include: [Task] })
        const realKanbans = await this.kanbanModel.findAll({ where: { userId }, include: [Task] });
        return `realKanbans:${JSON.stringify(realKanbans)} \r sharedKanbans:${JSON.stringify(shared)}`;
    }

    findBy(options: FindOptions) {
        return this.kanbanModel.findAll(options);
    }

    findOne(options: FindOptions) {
        return this.kanbanModel.findOne(options);
    }


    async delete(id: number, userId: string) {
        const kanban = await this.findOne({ where: { id, userId } });
        if (!kanban) {
            return `You do not have access to kanban ${id}`;
        }
        (await kanban).deletedBy = userId;
        (await kanban).save();
        return this.kanbanModel.destroy({ where: { id, userId } })
    }


}
