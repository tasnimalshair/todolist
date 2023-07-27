import { Task } from './task.model';
export declare const TaskProvider: {
    provide: string;
    useFactory: () => typeof Task;
}[];
