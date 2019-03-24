import bcrypt from "bcrypt";
import { config } from "./../../config/env";
import { Schema, Model, model } from "mongoose";
import beautifyUnique from 'mongoose-beautiful-unique-validation';
import { IUserModel } from "../shared/interfaces/user.interface";

function hashPassword(password: string): string {
    return bcrypt.hashSync(password, config.saltRounds);
}
const UserModelSchema: Schema = new Schema({
    email: {
        type: String,
        required: [true, 'email field is required'],
        unique: 'Two users cannot share the same email',
    },
    name: {
        type: String,
        required: [true, 'what is the name?'],
    },
    password: {
        type: String,
        required: true,
        set: hashPassword,
    },
});
UserModelSchema.plugin(beautifyUnique);

export const User: Model<IUserModel> = model<IUserModel>("User", UserModelSchema);
