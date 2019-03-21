import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { config } from "./../../config/env";

function hashPassword(password: string): string {
    return bcrypt.hashSync(password, config.saltRounds);
}
const UserModelSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        set: hashPassword,
    },
});

const User = mongoose.model("User", UserModelSchema);

export default User;
