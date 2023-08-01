import { User } from './user.model';
import { FindOptions } from 'sequelize';
import { CreateSignupUserDto } from 'src/auth/dtos/create-signup.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    create(createSignupUserDto: CreateSignupUserDto, transaction: any): Promise<User>;
    findById(id: any): Promise<User>;
    findOne(options: FindOptions, transaction: any): Promise<User>;
}
