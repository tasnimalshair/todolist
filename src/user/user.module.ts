import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from '../auth/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProvider } from './user.provider';
// import { UserProvider } from 'src/auth/user.provider';

@Module({
  // imports: [SequelizeModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, ...UserProvider],
})
export class UserModule {}
