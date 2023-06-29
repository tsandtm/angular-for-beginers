import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription!: Subscription;


  // products$!: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Lắng nghe sự thay đổi trong Subject
    this.subscription = this.productService.products$.subscribe((items) => {
      this.products = items;
    })

    // Gọi phương thức để lấy dữ liệu từ API
    this.productService.getProducts();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  share() {
    window.alert('The product has been shared!');
  }
  NotifyFromAlert() {
    window.alert("Da nhan su kien tu ben alert component")
  }
}
