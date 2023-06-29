import { IProduct } from './../../../product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: IProduct | undefined
  @Output() notify=new EventEmitter();
}
