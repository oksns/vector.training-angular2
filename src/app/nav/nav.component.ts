import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { nav } from './nav';
import {AuthenticationService} from '../login/authentication.service';

@Component({
  selector: 'nav-root',
  templateUrl: './nav.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthenticationService],


})
export class NavComponent implements OnInit {
  public nav: any[] = nav;

  constructor(
    private _service: AuthenticationService) {}
  ngOnInit() {
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}
