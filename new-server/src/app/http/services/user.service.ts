import { BaseService } from "../../shared/classes/base.service";
import User from "./../../models/user.model";

class UserService extends BaseService {

    constructor() {
        super();
        this.model = User;
    }

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
