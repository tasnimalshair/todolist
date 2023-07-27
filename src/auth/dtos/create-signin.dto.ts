import { IsNotEmpty, IsString,IsEmail } from 'class-validator'

export class CreateSigninUserDto {

    
    @IsNotEmpty()
    @IsString()   
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password:string

}