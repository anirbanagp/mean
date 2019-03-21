import { BaseService } from "../../shared/classes/base.service";
import UserService from "./user.service";
import bcrypt from "bcrypt";

class AuthService extends BaseService {

    userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    public async authorize(email: string, password: string) {
        let query: object = { email };
        let user = await this.userService.findOne(query);

        if (user) {
            return await bcrypt.compare(password, user.password);
        }
        return false;
    }
}

export default AuthService;
