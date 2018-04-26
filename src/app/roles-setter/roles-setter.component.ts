import { Component, OnInit } from '@angular/core';
import {RoleshelperService} from '../roleshelper.service';

@Component({
  selector: 'app-roles-setter',
  templateUrl: './roles-setter.component.html',
  styleUrls: ['./roles-setter.component.scss']
})
export class RolesSetterComponent implements OnInit {

  public userRoles: string[] = [];

  constructor(private rolesHelperService: RoleshelperService) {}

  ngOnInit() {
    //todo make RW
    this.userRoles = this.rolesHelperService.getUserRoles();
  }

  onRolesInputChange(event) {
    this.rolesHelperService.setUserRoles(event.target.value.split(','));
  }

}
