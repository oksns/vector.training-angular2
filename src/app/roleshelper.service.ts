import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { COMPONENT_ROLES } from './mock-componentRoles';
import { ROLES_TREE } from './mock-RolesTree';
@Injectable()
export class RoleshelperService {

  public userRoles: BehaviorSubject<String[]> =  new  BehaviorSubject<String[]> (['user', 'employee']);
  public componentsRoles = COMPONENT_ROLES;
  public rolesTree = ROLES_TREE;
  constructor() { debugger}


  //https://ru.stackoverflow.com/questions/717679/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F-%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9
  getUserRoles(): Observable<String[]>{
    return this.userRoles.asObservable();
  }

  setUserRoles(userRoles) {
    this.userRoles.next(userRoles);
  }


  // param equals this.constructor.name or class name RoleshelperService for this class;
  // now it will we ChartsComponentComponent, RangeComponent, MessagesComponent and CalendarComponent
  // todo make name constant like ChartsComponentComponent for all
  getComponentRoles(componentName) {
    if (this.componentsRoles[componentName]) {
      return this.componentsRoles[componentName];
    } else {
      return [];
    }
  }


  isComponentVisible(componentName) {
    var a = this.getComponentRoles(componentName);
    var b; //= this.getUserRoles();
    this.getUserRoles().subscribe(value => b = value);
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) return true;
      }
    }
    return false;
  }

  isComponentVisibleForRoles(componentName, roles) {
    var a = this.getComponentRoles(componentName);
    var b = roles;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) return true;
      }
    }
    return false;
  }

}
