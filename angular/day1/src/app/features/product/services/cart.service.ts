import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Chua danh sach san pham duoc lua chon
  items: IProduct[] = [];
  /* . . . */

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
}
