import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss', '../../../node_modules/@progress/kendo-theme-default/dist/all.css'],
  encapsulation: ViewEncapsulation.None


})
export class HomeComponent {
  public items: string[] = [
    'Math', 'IT', 'Physics', 'Spanish', 'Chemistry'
  ];
}
