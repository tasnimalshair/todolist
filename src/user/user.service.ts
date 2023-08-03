import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { User } from './user.model';
import { FindOptions } from 'sequelize';
import { Transaction } from '../decorators/transaction.decorator';
import { CreateSignupUserDto } from 'src/auth/dtos/create-signup.dto';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
import { KanbanService } from 'src/kanban/kanban.service';
import { SharedKanbanBoardDto } from 'src/shared-kanban-board/dtos/create-shared-kanban-board.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(REPOSITORIES.USER_REPOSITORY)
    private userRepository: typeof User,
    private sharedKanbanBoardService: SharedKanbanBoardService,
    private kanbanService: KanbanService
  ) { }

  create(createSignupUserDto: CreateSignupUserDto, @Transaction() transaction) {
    return this.userRepository.create(createSignupUserDto, { transaction });

  }

  findById(id) {
    return this.userRepository.findByPk(id);
  }

  findOne(options: FindOptions, @Transaction() transaction) {
    return this.userRepository.findOne({ ...options, transaction });
  }

  async addParticipant(createDto: SharedKanbanBoardDto, userId: number) {
    const kanban = await this.kanbanService.findOne({ where: { id: createDto.kanbanId, userId: userId } });
    if (!kanban) {
      return 'You do not have this Kanban';
    }
    const user = await this.findById(userId);
    if (!user) {
      return 'User is not exist';
    }
    return this.sharedKanbanBoardService.create(createDto);
  }

  async deleteParticipant(sharedDto: SharedKanbanBoardDto, userId: string) {
    const userid = parseInt(userId);
    const kanban = await this.kanbanService.findOne({ where: { id: sharedDto.kanbanId, userId: userid } });

    if (!kanban) {
      return 'You do not have this Kanban';
    }
    const relation = await this.sharedKanbanBoardService.findOne({ where: { kanbanId: sharedDto.kanbanId, userId: sharedDto.userId } });

    if (!relation) {
      return `Kanban ${sharedDto.kanbanId} does not shared with user ${sharedDto.userId}`;
    }
    (await kanban).deletedBy = userId;
    (await kanban).save();
    await this.sharedKanbanBoardService.delete(sharedDto);
    return 'Deleted Successfully!';
  }
}
