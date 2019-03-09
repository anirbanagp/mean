import { BaseApiService } from '../shared/class/base-api.service';
import { Injectable } from '@angular/core';
import * as con from './../shared/constant';
import { Route } from './../shared/routes/route';


@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseApiService {

  /**
   * fetch user details
   */
  getUserInfo() {
    const url: string = Route.getUserInfo;
    this.genericApiCall(url, con.userInfoResponse);
  }

}
