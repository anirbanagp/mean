import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { config } from "./../../../config/env";
import { TokenMismatchException } from "../exceptions/token-mismatch.exception";

/**
 * this middleware is responsible to check token in header and put user details into request
 *
 * @param req request object
 * @param res response object
 * @param next next function
 *
 * @author Anirban Saha
 */
const authenticated = (req: any, res: any, next: NextFunction) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, config.secret, (err: any, decoded: any) => {
            if (!err) {
                req.decoded = decoded;
                next();
            } else {
                next(new TokenMismatchException('Token is not valid'));
            }
        });
    } else {
        next(new TokenMismatchException('Auth token is not supplied'));
    }
};

export default authenticated;
