/**
 * this is the base controller contain some common functionalities
 *
 * @author Anirban Saha
 */
export abstract class BaseController {

    protected error = false;
    protected message: string | boolean = false;
    protected data: any = [];
    protected http = 200;

    constructor() {
        this.error = false;
        this.message = false;
        this.data = [];
        this.http = 200;
    }
    /**
     * send api response
     *
     * @param  array   response     data of api response
     * @param  integer httpResponse http status of api response
     * @return JsonResponse
     */
    get apiResponse() {
        const message = this.message || (this.error ? 'Something went wrong!' : 'Successfuly received');
        const response = {
            error: this.error,
            message,
            data: this.data,
        };
        return response;
    }
}
