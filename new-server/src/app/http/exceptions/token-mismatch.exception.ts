import { HttpException } from "./http.exception";

/**
 * this will throw token not supplied or invalid token related exception.
 * basically it will throw 401 http status that is unauthenticated
 *
 * @author Anirban Saha
 */
export class TokenMismatchException extends HttpException {
    constructor(message: string) {
        super(401, message);
    }
}
