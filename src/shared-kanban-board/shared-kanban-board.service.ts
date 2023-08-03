import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { SharedKanbanBoard } from './shared-kanban-board.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class SharedKanbanBoardService {
    constructor(@Inject(REPOSITORIES.SHARED_KANBAN_REPOSITORY)
    private sharedModel: typeof SharedKanbanBoard) { }

    create(kId: number, uId: number) {
        return this.sharedModel.create({ kanbanId: kId, userId: uId });
    }

    async get(userId: number) {
        const shared = await this.sharedModel.findAll({ where: { userId }, attributes: ['kanbanId'] });
        return shared.map(s => s.kanbanId);
    }

    find(options: FindOptions) {
        return this.sharedModel.findAll(options);
    }

    findOne(options:FindOptions) {
        return this.sharedModel.findOne(options);
    }

    delete(userId: number, kanbanId: number) {
        return this.sharedModel.destroy({ where: { userId, kanbanId } })
    }
}
