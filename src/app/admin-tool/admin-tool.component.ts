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

  constructor(private rolesHelperService: RoleshelperService) {}

  ngOnInit() {
    this.init();
  }

  init() {
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
    let result = [level, role.name];
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

  onCheckBoxClick(row, componentsList, index, checked) {
    let role = row[1];
    let component = componentsList[index-2];
    console.log(role, component, checked);
    //снимаем роль, со всех детей
    if (checked) {
      let allChild = [role];
      for (let i = 0; i < allChild.length; i++) {
        for (let role of this.rolesHelperService.rolesTree) {
          if (allChild[i] === role.parent) allChild.push(role.name)
        }
      }

      let componentRoles = this.rolesHelperService.componentsRoles[component];
      let componetRolesResult = [];
      for (let role of componentRoles) {
        let isNeedToRemove = false;
        for (let rolesToRemove of allChild) {
          if (role === rolesToRemove) {
            isNeedToRemove = true;
          }
        }

        if (!isNeedToRemove) componetRolesResult.push(role)
      }
      this.rolesHelperService.componentsRoles[component] = componetRolesResult;

    }

    if (!checked) {
      let allParents = [role];
      for (let i = 0; i < allParents.length; i++) {
        for (let role of this.rolesHelperService.rolesTree) {
          if (allParents[i] === role.name) allParents.push(role.parent)
        }
      }

      let componentRoles = this.rolesHelperService.componentsRoles[component];
      let componetRolesResult = [];
      for (let role of componentRoles) {
        let isNeedToRemove = false;
        for (let rolesToRemove of allParents) {
          if (role === rolesToRemove) {
            isNeedToRemove = true;
          }
        }

        if (!isNeedToRemove) componetRolesResult.push(role)
      }
      this.rolesHelperService.componentsRoles[component] = componetRolesResult;

    }

    this.init();
  }

}
