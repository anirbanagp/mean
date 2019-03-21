import jwt from "jsonwebtoken";
import { config } from "./../../../config/env";
import AuthService from "../services/auth.service";
import HttpException from "../exceptions/http.exception";
import { Request, Response, NextFunction } from "express";
import { BaseController } from "./../../shared/classes/base.controller";

class Auth extends BaseController {
    authService: AuthService;

    constructor() {
        super();
        this.authService = new AuthService();
    }

    public async login(req: Request, res: Response, next: NextFunction) {

        if (await this.authService.authorize(req.body.email, req.body.password)) {
            const token = this.getToken({ token: req.body.email });
            this.data = { token };
            this.message = 'Authentication successful!';
            res.json(this.apiResponse);

        } else {
            next(new HttpException(403, 'Incorrect username or password'));
        }
    }
    public index(req: Request, res: Response) {
        res.json({
            message: 'Index page',
            success: true,
        });
    }
    private getToken(payload) {
        return jwt.sign(payload, config.secret, { expiresIn: '24h' });
    }
}

export default new Auth();
