import { Component } from '@angular/core';
import { IProduct } from 'src/app/product.model';
import { CartService } from '../../services/cart.service';

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
