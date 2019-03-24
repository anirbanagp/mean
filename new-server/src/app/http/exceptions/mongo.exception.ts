import { ValidationException } from "./validation.exception";

/**
 * this is reponsible to throw request data validation exception
 *
 * @author Anirban Saha
 */
export class MongoException extends ValidationException {
    constructor(errors: any) {
        let message = {};
        let key = Object.keys(errors.errors)[0];
        message[key] = [errors.errors[key].message];
        super(message);
    }
}
