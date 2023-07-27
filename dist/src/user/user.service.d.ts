import { User } from './user.model';
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    create(name: string, email: string, password: string): Promise<User>;
    find(email: string): Promise<User[]>;
}
