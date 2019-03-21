import jwt from "jsonwebtoken";
import { config } from "./../../../config/env";
import AuthService from "../services/auth.service";
import HttpException from "../exceptions/http.exception";
import { Request, Response, NextFunction } from "express";
import { BaseController } from "./../../shared/classes/base.controller";

/**
 * this controller contains all functionalites related to authentication
 *
 * @author Anirban saha
 */
class Auth extends BaseController {
    authService: AuthService;

    constructor() {
        super();
        this.authService = new AuthService();
    }

    /**
     * check the credentials and return a token on success
     * @param req request object
     * @param res response object
     * @param next next function
     */
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

    /**
     * dummy api which requires authentication token to access
     * @param req request object
     * @param res response object
     */
    public index(req: Request, res: Response) {
        res.json({
            message: 'Index page',
            success: true,
        });
    }

    /**
     * return a token signed with passed data
     * @param payload signed data that will be encrypted in token
     */
    private getToken(payload: object) {
        return jwt.sign(payload, config.secret, { expiresIn: '24h' });
    }
}

export default new Auth();
