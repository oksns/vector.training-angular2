import { Injectable } from '@angular/core';

@Injectable()
export class RoleshelperService {

  public userRoles: string[] = ['user', 'employee'];

  constructor() { debugger}


  //https://ru.stackoverflow.com/questions/717679/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F-%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9
  getUserRoles() {
    return this.userRoles;
  }

  setUserRoles(userRoles) {
    this.userRoles = userRoles
  }


  // param equals this.constructor.name or class name RoleshelperService for this class;
  // now it will we ChartsComponentComponent, RangeComponent, MessagesComponent and CalendarComponent
  // todo make name constant like ChartsComponentComponent for all
  getComponentRoles(componentName) {
    //todo redevelop with map and mock object
    if ('ChartsComponentComponent' == componentName) {
      return ['employee'];
    }

    if ('RangeComponentComponent' == componentName) {
      return ['user', 'employee'];
    }

    if ('MessagesComponentComponent' == componentName) {
      return ['user', 'employee'];
    }

    if ('CalendarComponentComponent' == componentName) {
      return ['user', 'employee'];
    }
    return [];
  }


  isComponentVisible(componentName) {
    var a = this.getComponentRoles(componentName);
    var b = this.getUserRoles();
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) return true;
      }
    }
    return false;
  }

}
