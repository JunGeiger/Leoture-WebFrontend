declare namespace Api {
  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      token: string;
      refreshToken: string;
    }

    interface UserInfo {
      userId: string;
      userName: string;
      nickName: string;
      email: string;
      phone: string;
      roles: string[];
      buttons: string[];
    }
  }
}
