import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public login: any,
    public password: any) { }
}

const users = [
  new User('admin', 'admin'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }
  login(user) {
    const authenticatedUser = users.find(u => u.login === user.login);
    if (authenticatedUser && authenticatedUser.password === user.password) {
       localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['home']);
      return true;
    }
    return false;

  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['login']);
    }
  }
}
