import { Injectable } from '@angular/core';

@Injectable()
export class RoleshelperService {

  constructor() { debugger}

  getUserRoles() {
    return ['user'];
  }


  // param equals this.constructor.name or class name RoleshelperService for this class;
  // now it will we ChartsComponent, RangeComponent, MessagesComponent and CalendarComponent
  getComponentRoles(componentName) {
    //todo redevelop with map and mock object
    if ('ChartsComponent' == componentName) {
      return ['employee'];
    }

    if ('RangeComponent' == componentName) {
      return ['user', 'employee'];
    }

    if ('MessagesComponent' == componentName) {
      return ['user', 'employee'];
    }

    if ('CalendarComponent' == componentName) {
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
