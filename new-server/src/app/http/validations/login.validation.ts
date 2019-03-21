import { IsEmail, IsString } from 'class-validator';

class CreatePostDto {
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;
}

export default CreatePostDto;
