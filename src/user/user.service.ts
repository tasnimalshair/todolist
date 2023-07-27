import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORIES } from 'src/common/constants';
import { User } from './user.model';


@Injectable()
export class UserService {
  constructor(
    @Inject(REPOSITORIES.USER_REPOSITORY)
    private userRepository: typeof User,
  ) {}

  create(name: string, email: string, password: string) {
    return this.userRepository.create({ name, email, password });

  }


  find(email: string) {
    return this.userRepository.findAll({ where: { email } });
  }
}
