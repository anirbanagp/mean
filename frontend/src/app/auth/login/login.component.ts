import { LoginData } from './../../shared/models/auth.model';
import { Component, OnInit } from '@angular/core';
import { BaseGuestComponent } from './../../shared/class/base-guest-component';
import { loginResponse, userInfoResponse, errorResult } from './../../shared/constant';
import { EventData } from './../../shared/models/event-data.model';

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
    this.base.router.navigate(['/dashboard']);
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
