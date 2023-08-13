import { User } from './user.model';
import { FindOptions } from 'sequelize';
import { CreateSignupUserDto } from 'src/auth/dtos/create-signup.dto';
import { SharedKanbanBoardService } from 'src/shared-kanban-board/shared-kanban-board.service';
import { KanbanService } from 'src/kanban/kanban.service';
export declare class UserService {
    private userRepository;
    private sharedKanbanBoardService;
    private kanbanService;
    constructor(userRepository: typeof User, sharedKanbanBoardService: SharedKanbanBoardService, kanbanService: KanbanService);
    create(createSignupUserDto: CreateSignupUserDto, transaction: any): Promise<User>;
    findById(id: any, transaction?: any): Promise<User>;
    findOne(options: FindOptions, transaction: any): Promise<User>;
}
