import { IsNotEmpty, IsString, MinLength, IsEmail, Matches } from 'class-validator'
import { Role } from 'src/roles/role.enum';

export class CreateSignupUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Matches(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/)
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string

    // TODO: Remove this, user is of type user
    @IsString()
    role: Role
}