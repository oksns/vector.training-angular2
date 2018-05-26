import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None


})
export class LoginComponent {

  public loginInput: string;
  public passwordInput: string;

  public login: string = "login";
  public password: string = "1";

  onButtonClick(login, password, realLogin, realPassword) {

    if(login === realLogin && password === realPassword) {
      console.log('it works!');
      return true;
    }
    else {
      alert('Try another credentials');
    }

  }
}
