import { Model } from "mongoose";
import { Inject } from "typescript-ioc";
import { User } from "./../../models/user.model";
import { BaseService } from "../../shared/classes/base.service";
import { IUserModel } from "./../../shared/interfaces/user.interface";

/**
 * this service contains all functionalities realted to users
 *
 * @author Anirban Saha
 */
export class UserService extends BaseService {

    @Inject
    model: Model<IUserModel> = User;

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
