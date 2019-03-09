import { Component, OnInit } from '@angular/core';

import { LoginData } from 'src/app/shared/models/auth.model';
import { EventData } from 'src/app/shared/models/event-data.model';
import { BaseGuestComponent } from 'src/app/shared/class/base-guest-component';
import { loginResponse, userInfoResponse, errorResult } from './../../../shared/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseGuestComponent implements OnInit {

  public loginData: LoginData = new LoginData();
  public disableButton = false;
  private token: string;

  ngOnInit() {
    // this.base.router.navigate(['/']);
    this.globalEventListener();
  }

  handleAuthApiResponse(response: any) {
    if (response.resultType === loginResponse) {
      this.handleLoginResponse(response);
    }
    if (response.resultType === userInfoResponse) {
      this.handleUserInfoResponse(response);
    }
    if (response.resultType === errorResult) {
      this.disableButton = false;
      this.base.spinner.hide();
    }
  }

  onSubmit() {
    this.disableButton = true;
    this.base.spinner.show();
    this.auth.login(this.loginData);
  }

  handleLoginResponse(response) {
    this.token = response.result.data.token;
    this.auth.getUserInfo(this.token);
  }
  handleUserInfoResponse(response) {
    if (response.result.data.user && this.token) {
      let userData = response.result.data.user;
      userData['token'] = this.token;
      this.auth.setUserData(userData);
      this.base.showSuccess('Successfully LoggedIn!');
      this.base.spinner.hide();
      this.base.router.navigate([this.auth.redirectUrl]);
    }
  }
  globalEventListener() {
    this.base.common.globalEvents.subscribe((eventData: EventData) => {
      // this.log(eventData);
    });
  }
}
