import bcrypt from "bcrypt";
import UserService from "./user.service";
import { BaseService } from "../../shared/classes/base.service";

/**
 * this service contains all functionalities realted to authentication
 *
 * @author Anirban Saha
 */
class AuthService extends BaseService {

    /**
     * user service
     */
    userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    /**
     * check a credentials either valid or not
     * @param email email id
     * @param password password
     */
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
