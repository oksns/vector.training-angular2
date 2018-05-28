import { Component } from '@angular/core';
import { sampleProducts } from './products';


@Component({
  selector: 'materials-root',
  templateUrl: './materials.component.html',
})

export class MaterialsComponent {
  private gridView: any[] = sampleProducts;
  public isEditable: boolean = false;
  public showOkButton: boolean = false;
}
