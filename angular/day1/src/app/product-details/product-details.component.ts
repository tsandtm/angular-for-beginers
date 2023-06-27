import { Component } from '@angular/core';
import { IProduct, Products } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: IProduct | undefined
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    // lay ra cac parameter tu url truyen qua.
    const routeParams = this.route.snapshot.paramMap;
    // lay gia tri cua cua para producid
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = Products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
