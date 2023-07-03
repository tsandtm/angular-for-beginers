import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/product.model';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: IProduct | undefined
  @Output() notify=new EventEmitter();
}
