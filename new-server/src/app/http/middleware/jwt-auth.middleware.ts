import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "./../../../config/env";
import TokenMismatchException from "../exceptions/token-mismatch.exception";

const authenticated = (req: any, res: any, next: NextFunction) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
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
