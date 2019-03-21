import { BaseService } from "../../shared/classes/base.service";
import User from "./../../models/user.model";

/**
 * this service contains all functionalities realted to users
 *
 * @author Anirban Saha
 */
class UserService extends BaseService {

    constructor() {
        super();
        this.model = User;
    }

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

export default UserService;
