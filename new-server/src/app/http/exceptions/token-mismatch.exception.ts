import HttpException from "./http.exception";

class TokenMismatchException extends HttpException {
    constructor(message: string) {
        super(401, message);
    }
}

export default TokenMismatchException;
