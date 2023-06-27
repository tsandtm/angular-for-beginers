import { Component } from '@angular/core';

import { CartService } from '../cart.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  //khai bao bien item co kieu la array IProduct. khoi tao gia tri rong cho no
  items: IProduct[] = []
  // items = this.cartService.getItems();
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }
}
