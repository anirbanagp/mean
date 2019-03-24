import bcrypt from "bcrypt";
import { Inject } from "typescript-ioc";
import { UserService } from "./user.service";
import { BaseService } from "../../shared/classes/base.service";

/**
 * this service contains all functionalities realted to authentication
 *
 * @author Anirban Saha
 */
export class AuthService extends BaseService {

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
        let user: UserService["model"] = await this.userService.findOne(query);

        if (user) {
            return await bcrypt.compare(password, user.password);
        }
        return false;
    }
}
