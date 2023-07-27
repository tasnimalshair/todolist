import { IsNotEmpty, IsString, MinLength ,IsEmail} from 'class-validator'

export class CreateSignupUserDto {

    @IsNotEmpty()
    @IsString()
    name:string


    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password:string

}