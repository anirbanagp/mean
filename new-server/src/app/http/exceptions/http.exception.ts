/**
 * this is base exception class, contain http status and a message
 *
 * @author Anirban Saha
 */
class HttpException extends Error {
    /**
     * http status [ 400 | 401 | 403 | 500 ..]
     */
    status: number;

    /**
     * error message that will be available in response
     */
    message: string;

    /**
     * need to create object of this class by passing http status and message to throw exception
     * @param status http status
     * @param message error message
     */
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export default HttpException;
