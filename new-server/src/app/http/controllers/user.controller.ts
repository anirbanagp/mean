import { NextFunction, Request, Response } from "express";
import { BaseController } from "./../../shared/classes/base.controller";
import UserService from "./../services/user.service";
import HttpException from "../exceptions/http.exception";
import to from 'await-to-js';

class User extends BaseController {

    userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    public async index(req: Request, res: Response, next: NextFunction) {
        let [error, user] = await to(this.userService.find({}));

        if (error) {
            next(new HttpException(400, 'Something went wrong'));
        } else {
            this.data = user;
            res.json(this.apiResponse);
        }
    }

    public async store(req: Request, res: Response, next: NextFunction) {
        let [error, user] = await to(this.userService.store(req.body));

        if (user) {
            this.data = user;
            res.json(this.apiResponse);
        } else {
            next(new HttpException(422, 'can not save'));
        }
    }

}

export default new User();
