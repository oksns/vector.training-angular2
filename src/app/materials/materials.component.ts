import { Component } from '@angular/core';
import { sampleProducts } from './products';
import {AbstractRolesComponentComponent} from '../abstract-roles-component/abstract-roles-component.component';


@Component({
  selector: 'materials-root',
  templateUrl: './materials.component.html',
})

export class MaterialsComponent extends AbstractRolesComponentComponent {
  private gridView: any[] = sampleProducts;
  public isEditable: boolean = false;
  public showOkButton: boolean = false;
}
