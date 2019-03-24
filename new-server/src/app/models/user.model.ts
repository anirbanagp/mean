import bcrypt from "bcrypt";
import { prop, Typegoose, plugin } from 'typegoose';
import beautifyUnique from 'mongoose-beautiful-unique-validation';

import { config } from "./../../config/env";

function hashPassword(password: string): string {
    return bcrypt.hashSync(password, config.saltRounds);
}
@plugin(beautifyUnique)
class UserModel extends Typegoose {

    @prop({ required: [true, 'name field is required'] })
    name: string;

    @prop({
        required: [true, 'email field is required'],
        unique: true,
    })
    email: string;

    @prop({ required: [true, 'this field is required'], set: hashPassword })
    password: string;

}
export const User = new UserModel().getModelForClass(UserModel);
