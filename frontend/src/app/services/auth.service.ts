import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as con from './../shared/constant';
import { Route } from './../shared/routes/route';
import { UserData, LoginData } from '../shared/models/auth.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * loggedd in user data
   */
  public userData: UserData = new UserData();

  /**
   * this is log in status for user
   */
  private isLoggedIn = false;

  /**
   * contain api response
   */
  private result: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  /**
   *where to redirect after successful login
   *
   * @memberof AuthService
   */
  public redirectUrl = '/dashboard';

  /**
   *Creates an instance of AuthService.
   * @param {HttpClient} http
   * @param {Router} router
   * @memberof AuthService
   */
  constructor(public http: HttpClient, public router: Router) { }
  /**
   * this will call login credential
   *
   * @param loginCredentials logincred
   */
  login(loginCredentials: LoginData) {
    const url: string = Route.login;
    const headers = this.getHeader(true);

    return this.http.post(url, loginCredentials, headers).subscribe(
      data => {
        this.result.next({ resultType: con.loginResponse, result: data });
      },
      error => {
        this.result.next({ resultType: con.errorResult, result: error });
      }
    );
  }
  /**
   * fetch user details
   *
   * @param token string auth-token
   */
  getUserInfo(token: string) {
    const url: string = Route.getUserInfo;
    const headers = this.getHeader(true, token);

    return this.http.get(url, headers).subscribe(
      data => {
        this.result.next({ resultType: con.userInfoResponse, result: data });
      },
      error => {
        this.result.next({ resultType: con.errorResult, result: error });
      }
    );
  }
  /**
   * this will set user data into class property to manage logged in activity
   *
   * @param userDetails UserDetailsResponse
   */
  setUserData(userDetails: UserData) {
    this.setDataIntoLocalStorage(userDetails);
    this.setUserDataIntoClassProperty(userDetails);
  }

  /**
   *set user information into class property
   *
   * @param {UserData} userDetails
   * @memberof AuthService
   */
  setUserDataIntoClassProperty(userDetails: UserData) {
    this.userData.name = userDetails.name;
    this.userData.email = userDetails.email;
    this.userData.token = userDetails.token;
    this.isLoggedIn = true;
  }

  /**
   *set user information into localstorage
   *
   * @param {UserData} userDetails
   * @returns
   * @memberof AuthService
   */
  setDataIntoLocalStorage(userDetails: UserData) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('userDetails', JSON.stringify(
        { token: userDetails.token, name: userDetails.name, email: userDetails.email }
      ));
      resolve('1');
    });
  }
  /**
   *retrive user information from localstorage
   *
   * @memberof AuthService
   */
  retriveUserdata() {
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    if (userData != null) {
      this.setUserDataIntoClassProperty(userData);
    }
  }
  /**
   *either a user logged in or not
   *
   * @returns {boolean}
   * @memberof AuthService
   */
  checkLoggedIn(): boolean {
    this.retriveUserdata();
    return this.isLoggedIn;
  }
  /**
   * this will call when user click on log out
   */
  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  /**
   * this will add header on each http request
   *
   * @param {boolean} [json=true]
   * @param {string} [token=null]
   * @returns
   * @memberof AuthService
   */
  getHeader(json: boolean = true, token: string = null) {
    let headers = { 'Accept': 'application/json' };

    if (json) {
      headers['Content-Type'] = 'application/json';
    }
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };

    return httpOptions;
  }

  /**
   * observer of api response
   */
  get authApiResults() {
    return this.result.asObservable();
  }
}

