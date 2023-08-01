import { BadRequestException, Injectable, NotFoundException, Req, UseInterceptors } from "@nestjs/common";
import { hashSync, compareSync } from "bcryptjs";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { Transaction } from "../decorators/transaction.decorator";
import { CreateSignupUserDto } from "./dtos/create-signup.dto";
import { CreateSigninUserDto } from "./dtos/create-signin.dto";



@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) { }

    async signup(createSignupUserDto: CreateSignupUserDto, @Transaction() transaction) {
        const _user = await this.userService.findOne({ where: { email: createSignupUserDto.email } }, transaction);
        if (_user) {
            throw new BadRequestException('Email already exists ,please change it.');
        }

        const encryptedPass = hashSync(createSignupUserDto.password, 10);
        createSignupUserDto.password = encryptedPass;
        const user = await this.userService.create(createSignupUserDto, transaction);

        return user;

    }

    async signin(createSigninUserDto: CreateSigninUserDto, @Transaction() transaction) {
        const user = await this.userService.findOne({ where: { email: createSigninUserDto.email } }, transaction);
        if (!user) {
            throw new NotFoundException('User not found.');
        }
        console.log(createSigninUserDto.password);

        const isPass = compareSync(createSigninUserDto.password, user.password);
        console.log(user.password);

        if (!isPass) {
            throw new BadRequestException();
        }
        return await this.jwtService.sign({ id: user.id });
    }
}
