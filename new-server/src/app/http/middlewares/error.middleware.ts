import { NextFunction, Request, Response } from 'express';

import { HttpException } from './../exceptions/http.exception';

/**
 * global error handler to return all exception in a formatted way
 *
 * @param error exception
 * @param request request object
 * @param response response object
 * @param next next function
 *
 * @author Anirban Saha
 */
function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response
        .status(status)
        .send({
            error: true,
            message,
        });
}

export default errorMiddleware;
