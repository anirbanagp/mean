import { IsEmail, IsString, Min, Max } from 'class-validator';

class UserRequest {
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;

    @IsString()
    public name: string;
}

export default UserRequest;
