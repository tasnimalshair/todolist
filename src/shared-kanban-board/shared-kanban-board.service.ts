import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { SharedKanbanBoard } from './shared-kanban-board.model';
import { FindOptions } from 'sequelize';
import { SharedKanbanBoardDto } from './dtos/create-shared-kanban-board.dto';
import { PartialSharedKanbanBoardDto } from './dtos/partial-shared-kanban-board.dto';

@Injectable()
export class SharedKanbanBoardService {
    constructor(@Inject(REPOSITORIES.SHARED_KANBAN_REPOSITORY)
    private sharedModel: typeof SharedKanbanBoard) { }

    create(createDto: SharedKanbanBoardDto) {
        return this.sharedModel.create({ kanbanId: createDto.kanbanId, userId: createDto.userId });
    }

    async get(userId: number) {
        const shared = await this.sharedModel.findAll({ where: { userId }, attributes: ['kanbanId'] });
        return shared.map(s => s.kanbanId);
    }

    find(options: FindOptions) {
        return this.sharedModel.findAll(options);
    }

    findOne(options: FindOptions) {
        return this.sharedModel.findOne(options);
    }

    delete(dto: SharedKanbanBoardDto) {
        return this.sharedModel.destroy({ where: { userId: dto.userId, kanbanId: dto.kanbanId } })
    }
}
