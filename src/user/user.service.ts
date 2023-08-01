import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { User } from './user.model';
import { Role } from 'src/roles/role.enum';
import { FindOptions } from 'sequelize';
import { Transaction } from '../decorators/transaction.decorator';
import { CreateSignupUserDto } from 'src/auth/dtos/create-signup.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(REPOSITORIES.USER_REPOSITORY)
    private userRepository: typeof User,
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
}
