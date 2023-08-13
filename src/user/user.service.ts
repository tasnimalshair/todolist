import { Inject, Injectable, NotFoundException, UseInterceptors, forwardRef } from '@nestjs/common';
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
    @Inject(forwardRef(() => SharedKanbanBoardService))
    private sharedKanbanBoardService: SharedKanbanBoardService,

    private kanbanService: KanbanService
  ) { }

  create(createSignupUserDto: CreateSignupUserDto, @Transaction() transaction) {
    return this.userRepository.create(createSignupUserDto, { transaction });

  }

  findById(id, @Transaction() transaction?) {
    return this.userRepository.findByPk(id, { transaction });
  }

  findOne(options: FindOptions, @Transaction() transaction) {
    return this.userRepository.findOne({ ...options, transaction });
  }



}
