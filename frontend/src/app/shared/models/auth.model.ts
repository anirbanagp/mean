/**
 * contain loggedd in user data
 */
export class UserData {
  /**
   * logged in user name
   */
  public name = '';

  /**
   * logged in user email
   */
  public email = '';

  /**
   * logged in user auth token
   */
  public token: string;
}

export class LoginData {
  public email = '';

  public password = '';
}
