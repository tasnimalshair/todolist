import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { SharedKanbanBoard } from './shared-kanban-board.model';
import { FindOptions } from 'sequelize';
import { SharedKanbanBoardDto } from './dtos/create-shared-kanban-board.dto';
import { Transaction } from 'src/decorators';
import { KanbanService } from 'src/kanban/kanban.service';
import { UserService } from 'src/user/user.service';
import { log } from 'console';

@Injectable()
export class SharedKanbanBoardService {
    constructor(@Inject(REPOSITORIES.SHARED_KANBAN_REPOSITORY)
    private sharedModel: typeof SharedKanbanBoard,
        @Inject(forwardRef(() => KanbanService))
        private kanbanService: KanbanService,
        @Inject(forwardRef(() => UserService))
        private userService: UserService) { }

    async create(createDto: SharedKanbanBoardDto, user_id: number, @Transaction() transaction) {
        console.log('kanbanId', createDto.kanbanId);

        const kanban = await this.kanbanService.findOne({ where: { id: createDto.kanbanId, user_id } }, transaction);
        if (!kanban) {
            return 'You do not have this kanban';
        }

        const user = await this.userService.findById(createDto.userId);
        if (!user) {
            return `No user with id ${createDto.userId}`
        }

        console.log('zzzzzzzz', createDto);

        const shared = await this.sharedModel.create({ ...createDto, createdBy: user_id }, { transaction });

        return shared;
    }

    async get(userId: number, @Transaction() transaction) {
        const shared = await this.sharedModel.findAll({ where: { userId: userId }, attributes: ['kanbanId'], transaction });
        return shared.map(s => s.kanbanId);
    }

    find(options: FindOptions, @Transaction() transaction) {
        return this.sharedModel.findAll({ ...options, transaction });
    }

    findOne(options: FindOptions, @Transaction() transaction) {
        return this.sharedModel.findOne({ ...options, transaction });
    }

    async delete(dto: SharedKanbanBoardDto, user_id: number, @Transaction() transaction) {
        const kanban = await this.kanbanService.findOne({ where: { id: dto.kanbanId, user_id } }, transaction);

        if (!kanban) {
            return 'You do not have this Kanban';
        }
        const shared = await this.sharedModel.findOne({ where: { userId: dto.userId, kanbanId: dto.kanbanId } });
        if (!shared) {
            return 'No relation between this user and this kanban';
        }
        shared.deletedBy = user_id;
        (await shared).save();
        await this.sharedModel.destroy({ where: { userId: dto.userId, kanbanId: dto.kanbanId }, transaction });
        return 'Deleted Successfully';

    }
}
