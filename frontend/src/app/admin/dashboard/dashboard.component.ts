import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/class/base-component';
import { OnApiResponse } from 'src/app/shared/interface/on-api-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit, OnApiResponse {


  ngOnInit() {
    this.base.api.getUserInfo();
  }

  handleApiResponse(response: any) {
    // this.log(response);
  }
}
