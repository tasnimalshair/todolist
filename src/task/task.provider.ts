import { REPOSITORIES } from 'src/common/constants';
import { Task } from './task.model';

export const TaskProvider = [
  {
    provide: REPOSITORIES.TASK_REPOSITORY,
    useFactory: () => {
      return Task;
    },
  },
];
  
