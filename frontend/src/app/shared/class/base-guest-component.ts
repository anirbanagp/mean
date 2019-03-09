import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';
import { errorResult } from '../constant';
import { Subscription } from 'rxjs';
import { OnDestroy, Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class BaseGuestComponent implements OnDestroy {

  private apiSubscription: Subscription;

  /**
   * manage dependency injcection of services
   *
   * @param BaseService base service
   * @param AuthService auth service
   */
  constructor(public base: BaseService, public auth: AuthService) {
    this.apiSubscription = this.auth.authApiResults.subscribe(data => {
      if (data.resultType === errorResult) {
        const errorMessage = data.result.error.message ? data.result.error.message : 'something went wrong';
        this.base.showError(errorMessage);
      }
      this.handleAuthApiResponse(data);
    });
  }

  /**
   * this will handel all api response, must be override on child component
   *
   * @param data any
   */
  handleAuthApiResponse(data: any) { }
  /**
   *log a message to console
   *
   * @param {*} any number of param
   * @memberof BaseGuestComponent
   */
  log(...args ) {
    if (!environment.production) {
      for (let a in arguments) {
        if (arguments) {
          console.log(arguments[a]);
        }
      }
    }
  }
  /**
   * unsubscribe api response subscriber on component destroy
   */
  ngOnDestroy() {
    this.apiSubscription.unsubscribe();
  }

}
