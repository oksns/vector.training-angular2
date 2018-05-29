import { Component, OnInit } from '@angular/core';
import {RoleshelperService} from '../roleshelper.service';

@Component({
  selector: 'app-abstract-roles-component',
  templateUrl: './abstract-roles-component.component.html'
})
export class AbstractRolesComponentComponent implements OnInit {

  public isVisible = true;
  public componentRoles: string[] = [];
  public userRoles: String[] = [];

  constructor(private rolesHelperService: RoleshelperService) { }

  ngOnInit() {
    // todo make internal methods and make it observable
    this.componentRoles = this.rolesHelperService.getComponentRoles(this.constructor.name);
    this.isVisible = this.rolesHelperService.isComponentVisible(this.constructor.name);
    this.rolesHelperService.getUserRoles().subscribe(value =>
     {this.userRoles = value;
     this.isVisible = this.rolesHelperService.isComponentVisible(this.constructor.name);}
    );
    // this.userRoles = this.rolesHelperService.getUserRoles();
  }



}
