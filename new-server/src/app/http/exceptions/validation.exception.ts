/**
 * this is reponsible to throw request data validation exception
 *
 * @author Anirban Saha
 */
export class ValidationException extends Error {
    status = 422;
    message: any;
    constructor(errors: any) {
        super('validation failed');
        this.message = errors;
    }
}
