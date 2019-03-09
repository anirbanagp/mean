import { environment } from './../../../environments/environment';

export class Route {

  static baseUrl = environment.APIEndpoint;

  static login = Route.baseUrl + 'login';
  static getUserInfo = Route.baseUrl + 'user-info';
}
