import { IsEmail, IsString } from 'class-validator';

class LoginRequest {
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;
}

export default LoginRequest;
