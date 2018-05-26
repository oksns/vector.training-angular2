import { Component, OnInit } from '@angular/core';
import {RoleshelperService} from '../roleshelper.service';

@Component({
  selector: 'app-admin-tool',
  templateUrl: './admin-tool.component.html',
  styleUrls: ['./admin-tool.component.scss']
})
export class AdminToolComponent implements OnInit {

  componentsList: string[];
  dataTable;

  constructor(private rolesHelperService: RoleshelperService) { debugger;}

  ngOnInit() {
    this.componentsList = [];
    for (let key in this.rolesHelperService.componentsRoles) {
      this.componentsList.push(key);
    }

    this.dataTable = [];
    for (let role of this.rolesHelperService.rolesTree) {
      if (role.parent === '') {
        this.dataTable.push(this.addTableRow( role , 0));
        this.putAllChild(role.name, 1);
      }
    }
  }

  addTableRow( role, level) {
    let spacer = '';
    for (let i = 0; i <= level; i++) {
      spacer += '→';
    }
    let result = [level, spacer + role.name];
    for (let comp of this.componentsList) {
      result.push(this.rolesHelperService.isComponentVisibleForRoles(comp, [role.name]));
    }
    return result;
  }

  putAllChild(parentRoleName, level) {
     for (let role of this.rolesHelperService.rolesTree) {
      if (role.parent === parentRoleName) {
        this.dataTable.push(this.addTableRow( role , level));
        this.putAllChild(role.name, level+1);
      }
    }
  }


}
