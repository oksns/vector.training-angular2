import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { nav } from './nav';
import {AuthenticationService} from '../login/authentication.service';
import {RoleshelperService} from "../roleshelper.service";

@Component({
  selector: 'nav-root',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AuthenticationService],


})
export class NavComponent implements OnInit {
  public nav: any[] = nav;


  constructor(
    private _service: AuthenticationService,
    private rolesHelperService: RoleshelperService
  ) {}
  ngOnInit() {
    this._service.checkCredentials();
    let resultNav = [];
    for (let item of nav) {
      if (this.rolesHelperService.isComponentVisible(item.compname)) {
        resultNav.push(item);
      }
    }
    this.nav = resultNav;

    this.rolesHelperService.getUserRoles().subscribe(value =>
      {
        let resultNav = [];
        for (let item of nav) {
          if (this.rolesHelperService.isComponentVisible(item.compname)) {
            resultNav.push(item);
            this.nav = resultNav;
          }
        }
      }
    );


  }

  logout() {
    this._service.logout();
  }
}
