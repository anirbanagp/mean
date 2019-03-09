import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  /**
   *Creates an instance of BaseService.
   * @param {CommonService} common
   * @param {ApiService} api
   * @param {ToastrService} toastr
   * @param {AuthService} auth
   * @param {Router} router
   * @param {NgxSpinnerService} spinner
   * @memberof BaseService
   */
  constructor(
    public common: CommonService, public api: ApiService, public toastr: ToastrService,
    public auth: AuthService, public router: Router, public spinner: NgxSpinnerService
  ) { }
  /**
   *show success toastr
   *
   * @param {string} message
   * @param {string} [heading='Succesful!']
   * @memberof BaseService
   */
  showSuccess(message: string, heading: string = 'Succesful!') {
    this.toastr.success(message, heading, {closeButton: true});
  }
  /**
   *show error toastr
   *
   * @param {string} message
   * @param {string} [heading='Oops!']
   * @memberof BaseService
   */
  showError(message: string, heading: string = 'Oops!') {
    this.toastr.error(message, heading, {closeButton: true});
  }
  /**
   *show warning toastr
   *
   * @param {string} message
   * @param {string} [heading='Alert!']
   * @memberof BaseService
   */
  showWarn(message: string, heading: string = 'Alert!') {
    this.toastr.warning(message, heading, {closeButton: true});
  }
  /**
   *show info toastr
   *
   * @param {string} message
   * @param {string} [heading='Information!']
   * @memberof BaseService
   */
  showInfo(message: string, heading: string = 'Information!') {
    this.toastr.info(message, heading, {closeButton: true});
  }
}
