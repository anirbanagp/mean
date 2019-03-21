import { BaseService } from "../../shared/classes/base.service";
import User from "./../../models/user.model";

class UserService extends BaseService {

    constructor() {
        super();
        this.model = User;
    }
}

export default UserService;
