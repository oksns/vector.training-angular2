import { Component, ViewEncapsulation } from '@angular/core';
import { nav } from './nav';

@Component({
  selector: 'nav-root',
  templateUrl: './nav.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None


})
export class NavComponent {
  public nav: any[] = nav;
}
