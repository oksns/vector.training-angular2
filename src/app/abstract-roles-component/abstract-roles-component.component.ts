import { Component, OnInit } from '@angular/core';
import {RoleshelperService} from '../roleshelper.service';

@Component({
  selector: 'app-abstract-roles-component',
  templateUrl: './abstract-roles-component.component.html',
  styleUrls: ['./abstract-roles-component.component.scss']
})
export class AbstractRolesComponentComponent implements OnInit {

  public isVisible = true;
  public componentRoles: string[] = [];
  public userRoles: string[] = [];

  constructor(private rolesHelperService: RoleshelperService) { }

  ngOnInit() {
    //todo make internal methods and make it observable
    this.componentRoles = this.rolesHelperService.getComponentRoles(this.constructor.name);
    this.isVisible = this.rolesHelperService.isComponentVisible(this.constructor.name);
    this.userRoles = this.rolesHelperService.getUserRoles();
  }



}
