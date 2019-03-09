import { errorResult } from './../constant';
import { BaseService } from './../../services/base.service';
import { environment } from './../../../environments/environment';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class BaseComponent implements OnDestroy {

  private apiSubscription: Subscription;

  /**
   * manage dependency injcection of services
   *
   * @param baseService base service
   */
  constructor(public base: BaseService) {
    this.apiSubscription = this.base.api.apiResults.subscribe(data => {
      if (data.resultType === errorResult) {
        if (data.result.status === 401) {
          this.base.auth.logout();
          this.base.showError(data.result.error.message);
        } else if (data.result.status === 422) {
          this.handleValidationError(data);
          return true;
        } else {
          const errorMessage = data.result.error.message ? data.result.error.message : 'something went wrong';
          this.base.showError(errorMessage);
        }
      }
      this.handleApiResponse(data);
    });
  }

  /**
   * this will handel all api response, must be override on child component
   *
   * @param data any
   */
  handleApiResponse(data: any) { }

  handleValidationError(data: any) { }
  /**
   *log a message to console
   *
   * @param {*} any number of param
   * @memberof BaseComponent
   */
  log(...args) {
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
