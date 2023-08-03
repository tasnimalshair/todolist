import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { User } from './user.model';
import { FindOptions } from 'sequelize';
import { Transaction } from '../decorators/transaction.decorator';
import { CreateSignupUserDto } from 'src/auth/dtos/create-signup.dto';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
import { KanbanService } from 'src/kanban/kanban.service';

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

  async addParticipant(kId: number, uId: number, userId: number) {
    const kanban = await this.kanbanService.findOne({ where: { id: kId, userId: userId } });
    if (!kanban) {
      return 'You do not have this Kanban';
    }
    return this.sharedKanbanBoardService.create(kId, uId);
  }

  async deleteParticipant(kId: number, uId: number, userId: string) {
    const userid = parseInt(userId);
    const kanban = await this.kanbanService.findOne({ where: { id: kId, userId:userid } });
    
    if (!kanban) {
      return 'You do not have this Kanban';
    }
    const relation = await this.sharedKanbanBoardService.findOne({ where: { kanbanId: kId, userId: uId } });

    if (!relation) {
      return `Kanban ${kId} does not shared with user ${uId}`;
    }
    (await kanban).deletedBy = userId;
    (await kanban).save();
    await this.sharedKanbanBoardService.delete(uId, kId);
    return 'Deleted Successfully!';
  }
}
