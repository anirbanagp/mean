import to from 'await-to-js';
import { Inject } from 'typescript-ioc';
import { UserService } from "./../services/user.service";
import { HttpException } from "../exceptions/http.exception";
import { NextFunction, Request, Response } from "express";
import { MongoException } from '../exceptions/mongo.exception';
import { BaseController } from "./../../shared/classes/base.controller";

/**
 * this controller contains all functionalities related to a user
 *
 * @author Anirban Saha
 */
class User extends BaseController {

    @Inject
    userService: UserService;

    /**
     * return all users saved in database
     * @param req request object
     * @param res response object
     * @param next next finction
     */
    public async index(req: Request, res: Response, next: NextFunction) {
        let [error, user] = await to(this.userService.find({}));

        if (error) {
            next(new HttpException(400, 'Something went wrong'));
        } else {
            this.data = user;
            res.json(this.apiResponse);
        }
    }

    /**
     * this will store a user into database
     * @param req request object
     * @param res response object
     * @param next next function
     */
    public async store(req: Request, res: Response, next: NextFunction) {
        let [error, user] = await to(this.userService.store(req.body));

        if (user) {
            this.data = user;
            res.json(this.apiResponse);
        } else {
            next(new MongoException(error));
        }
    }

}

export default new User();
