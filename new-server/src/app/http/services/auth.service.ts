import bcrypt from "bcrypt";
import { Inject } from "typescript-ioc";
import { UserService } from "./user.service";
import { BaseService } from "../../shared/classes/base.service";
import { IUserModel } from "./../../shared/interfaces/user.interface";

/**
 * this service contains all functionalities realted to authentication
 *
 * @author Anirban Saha
 */
class AuthService extends BaseService {

    /**
     * user service
     */
    @Inject
    userService: UserService;

    /**
     * check a credentials either valid or not
     * @param email email id
     * @param password password
     */
    public async authorize(email: string, password: string) {
        let query: object = { email };
        let user: IUserModel = await this.userService.findOne(query);

        if (user) {
            return await bcrypt.compare(password, user.password);
        }
        return false;
    }
}

export default AuthService;
