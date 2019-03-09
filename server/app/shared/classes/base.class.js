class BaseController {
    constructor() {
        this.error = false;
        this.message = false;
        this.data = [];
    }
    /**
     * send api response
     *
     * @param  array   response     data of api response
     * @param  integer httpResponse http status of api response
     * @return JsonResponse
     */
    get apiResponse() {
        var message = this.message || (this.error ? 'Something went wrong!' : 'Successfuly received');
        var response = {
            error: this.error,
            message: message,
            data: this.data
        }
        return response;
    }
    check() {
        console.log('worked');
    }
}

module.exports = BaseController;