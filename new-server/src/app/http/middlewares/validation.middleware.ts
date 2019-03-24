import * as express from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import ValidationException from './../exceptions/validation.exception';

/**
 * this middleware is reponsible to validate a request data in respect of a request class
 *
 * @param type request class containing validation rules
 *
 * @author Anirban Saha
 */
function validationMiddleware<T>(type: any): express.RequestHandler {
    return (req, res, next) => {
        validate(plainToClass(type, req.body))
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    let message = {};
                    errors.forEach((error: ValidationError) => {
                        message[error.property] = Object.values(error.constraints);
                    });
                    next(new ValidationException(message));
                } else {
                    next();
                }
            });
    };
}

export default validationMiddleware;
