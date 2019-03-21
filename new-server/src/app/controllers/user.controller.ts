import { Request, Response } from "express";
import UserService from "./../services/user.service";
import { BaseController } from "./../shared/classes/base.controller";

class User extends BaseController {

  userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  public async index(req: Request, res: Response) {
    // let user = await this.userService.authorize(req.query.email, req.query.password);

    res.json({ error: false, data: { name: 'anirban' } });
  }

}

export default new User();
