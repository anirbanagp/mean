import { AuthService } from './../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { requestGet, requestPost, errorResult, requestPut, requestDelete } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  /**
   * contain api response
   */
  private result: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(public http: HttpClient, public auth: AuthService) { }

  /**
   * manage all api calling
   * @param url api endpoint
   * @param rtype constant of unique request. you can identify a response by this
   * @param bodydata optional, post data
   * @param requesttype constat of GET, POST
   */
  public genericApiCall(url, rtype: string, bodydata: any = null, requesttype: string = requestGet, json: boolean = true) {
    const headers = this.getHeader(json);
    switch (requesttype) {
      case requestGet:
        this.http.get(url, headers).subscribe(
          data => {
            this.result.next({ resultType: rtype, result: data });
          },
          error => {
            this.handleError(error, rtype);
          }
        );
        break;

      case requestPost:
        bodydata = bodydata ? bodydata : {};
        bodydata.token = this.auth.userData.token;
        this.http.post(url, bodydata, headers).subscribe(
          data => {
            this.result.next({ resultType: rtype, result: data });
          },
          error => {
            this.handleError(error, rtype);
          }
        );
        break;
      case requestPut:
        bodydata = bodydata ? bodydata : {};
        bodydata.token = this.auth.userData.token;
        this.http.put(url, bodydata, headers).subscribe(
          data => {
            this.result.next({ resultType: rtype, result: data });
          },
          error => {
            this.handleError(error, rtype);
          }
        );
        break;
      case requestDelete:
        bodydata = bodydata ? bodydata : {};
        bodydata.token = this.auth.userData.token;
        this.http.delete(url, headers).subscribe(
          data => {
            this.result.next({ resultType: rtype, result: data });
          },
          error => {
            this.handleError(error, rtype);
          }
        );
        break;
    }
  }

  /**
   * handle http error response
   * @param error error
   * @param requestid requestid
   */
  private handleError(error: any, requestid: string) {
    this.result.next({
      resultType: errorResult,
      result: error,
      requestid: requestid
    });
  }

  /**
   * observer of api response
   */
  get apiResults() {
    return this.result.asObservable();
  }

  /**
   * this will add header on each http request
   */
  getHeader(json: boolean = true) {

    let headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.auth.userData.token
    };

    if (json) {
      headers['Content-Type'] = 'application/json';
    }

    const httpOptions = {
      headers: new HttpHeaders(headers)
    };

    return httpOptions;
  }
}
