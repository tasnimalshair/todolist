import { ConfigService } from '@nestjs/config';

import { Sequelize } from 'sequelize-typescript';
import { PROVIDERS, DATABASE_CONFIG } from 'src/common/constants';
import { Task } from '../task/task.model';
import { User } from '../user/user.model';


export const databaseProvider = [
  {
    provide: 'sequelize',
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(DATABASE_CONFIG),
        logging: false,
      });
      sequelize.addModels([User, Task]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];