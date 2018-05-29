import { Component, OnInit } from '@angular/core';
import {AbstractRolesComponentComponent} from '../abstract-roles-component/abstract-roles-component.component';

@Component({
  selector: 'app-range-component',
  templateUrl: './range-component.component.html'
})
export class RangeComponentComponent extends AbstractRolesComponentComponent {
  public items: string[] = [
    'Math', 'IT', 'Physics', 'Spanish', 'Chemistry', 'russian'
  ];
}
