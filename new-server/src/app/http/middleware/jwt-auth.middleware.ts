import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "./../../../config/env";

const authenticated = (req: any, res: any, next: NextFunction) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, config.secret, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({
                    error: true,
                    message: 'Token is not valid',
                });
            } else {
                req.decoded = decoded;

                next();
            }
        });
    } else {
        return res.status(401).json({
            error: true,
            message: 'Auth token is not supplied',
        });
    }
};

export default authenticated;
