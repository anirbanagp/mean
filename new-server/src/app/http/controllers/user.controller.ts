import { NextFunction, Request, Response } from "express";
import { BaseController } from "./../../shared/classes/base.controller";
import UserService from "./../services/user.service";
import HttpException from "../exceptions/http.exception";

class User extends BaseController {

  userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  public async index(req: Request, res: Response, next: NextFunction) {
    // let user = await this.userService.authorize(req.query.email, req.query.password);
    next(new HttpException(404, 'Post not found'));
    // res.json({ error: false, data: { name: 'anirban' } });
  }

}

export default new User();
