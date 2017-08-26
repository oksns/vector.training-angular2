import { Component } from '@angular/core';
import { products } from './products';


@Component({
  selector: 'materials-root',
  templateUrl: './materials.component.html',
})

export class MaterialsComponent {
  private gridView: any[] = products;
}
