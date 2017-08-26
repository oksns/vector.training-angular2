import { Component } from '@angular/core';
import { products } from '../materials/products';


@Component({
  selector: 'material-root',
  templateUrl: './material.component.html',
})

export class MaterialComponent {
  private gridView: any[] = products;
}
