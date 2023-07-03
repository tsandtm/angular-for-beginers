import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    // lay ra cac parameter tu url truyen qua.
    const routeParams = this.route.snapshot.paramMap;
    // lay gia tri cua cua para producid
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.productService.getProduct(productIdFromRoute).subscribe((item) => {
      this.product = item;
    });
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
