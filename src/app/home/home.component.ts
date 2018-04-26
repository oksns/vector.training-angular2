import { Component, ViewEncapsulation } from '@angular/core';
import {RoleshelperService} from '../roleshelper.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss', '../../../node_modules/@progress/kendo-theme-default/dist/all.css'],
  encapsulation: ViewEncapsulation.None


})
export class HomeComponent {
  public items: string[] = [
    'Math', 'IT', 'Physics', 'Spanish', 'Chemistry', 'russian'
  ];

  public isCharsVisible = true;
  public chartComponentRoles: string[] = [];

  public isRangeVisible = true;
  public rangeComponentRoles: string[] = [];

  public isMessagesVisible = true;
  public messageComponentRoles: string[] = [];

  public isCalendarVisible = true;
  public calendarComponentRoles: string[] = [];

  constructor(private rolesHelperService: RoleshelperService) {}

  ngOnInit() {
    console.log("dmlo");
    this.chartComponentRoles = this.rolesHelperService.getComponentRoles('ChartsComponent');
    this.rangeComponentRoles = this.rolesHelperService.getComponentRoles('RangeComponent');
    this.messageComponentRoles = this.rolesHelperService.getComponentRoles('MessagesComponent');
    this.calendarComponentRoles = this.rolesHelperService.getComponentRoles('CalendarComponent');

    this.isCharsVisible = this.rolesHelperService.isComponentVisible('ChartsComponent');
    this.isRangeVisible = this.rolesHelperService.isComponentVisible('RangeComponent');
    this.isMessagesVisible = this.rolesHelperService.isComponentVisible('MessagesComponent');
    this.isCalendarVisible = this.rolesHelperService.isComponentVisible('CalendarComponent');
  }
}
