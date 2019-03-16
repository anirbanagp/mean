import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "./../../config/env";
import { BaseController } from "./../shared/classes/base.controller";

class Auth extends BaseController {
  public login(req: Request, res: Response) {
    const username = req.body.username;
    const password = req.body.password;
    let httpStatus = 200;
    const mockedUsername = 'anirban@gmail.com';
    const mockedPassword = '12345';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        const token = jwt.sign({ username },
          config.secret,
          {
            expiresIn: '24h', // expires in 24 hours
          });
        this.data = { token };
        this.message = 'Authentication successful!';
      } else {
        httpStatus = 403;
        this.error = true;
        this.message = 'Incorrect username or password';
      }
    } else {
      httpStatus = 400;
      this.error = true;
      this.message = 'Authentication failed! Please check the request';
    }
    res.status(httpStatus).json(this.apiResponse);
  }
  public index(req: Request, res: Response) {
    res.json({
      message: 'Index page',
      success: true,
    });
  }
}

export default new Auth();
