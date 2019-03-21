class ValidationException extends Error {
    status = 422;
    message: any;
    constructor(errors: any) {
        super('validation failed');
        this.message = errors;
    }
}

export default ValidationException;
