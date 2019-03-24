import { Inject } from "typescript-ioc";
import { User } from "./../../models/user.model";
import { BaseService } from "../../shared/classes/base.service";

/**
 * this service contains all functionalities realted to users
 *
 * @author Anirban Saha
 */
export class UserService extends BaseService {

    @Inject
    model = User;

    /**
     * store a user into database
     * @param request request params
     */
    public async store(request) {
        let userInfo = new this.model({
            email: request.email,
            name: request.name,
            password: request.password,
        });

        return await userInfo.save();
    }
}
