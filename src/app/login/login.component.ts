import { Component, ViewEncapsulation } from '@angular/core';
import {AuthenticationService, User} from './authentication.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthenticationService],


})
export class LoginComponent {
  public user: any = new User('', '');
  public errorMsg = '';

  constructor(
    private _service: AuthenticationService) {}

  login() {
    if(!this._service.login(this.user)){
      this.errorMsg = 'Failed to login';
    }
  }

}
