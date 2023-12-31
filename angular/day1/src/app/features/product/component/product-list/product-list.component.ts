import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription!: Subscription;

  error: string | undefined;


  // products$!: Observable<Product[]>;

  constructor(private productService: ProductService) { }


  /**
   * Trong đoạn code trên, phần .subscribe() trong ngOnInit() có ý nghĩa là lắng nghe sự thay đổi trong products$ của productService. Khi có sự thay đổi trong products$, callback function được cung cấp sẽ được gọi, và items (dữ liệu sản phẩm) sẽ được gán vào biến this.products trong component.
   * Cụ thể:
   * this.productService.products$.subscribe((items) => {...})
   * - Đây là việc đăng ký (subscribe) để lắng nghe sự thay đổi trong products$. Khi có sự thay đổi, callback function được cung cấp sẽ được gọi.
   * this.products = items
   * - Trong callback function, items (dữ liệu sản phẩm) được gán vào biến this.products trong component. Điều này đảm bảo rằng khi có sự thay đổi trong products$, component sẽ nhận được dữ liệu mới và có thể hiển thị nó. Phần này khác với phần trước đó (this.http.get().pipe().subscribe()) vì đây là một phần của lifecycle của component, được gọi khi component được khởi tạo và sẽ lắng nghe sự thay đổi trong products$. Trong khi đó, phần trước đó (this.http.get().pipe().subscribe()) chỉ là việc gửi yêu cầu GET đến API và không liên quan trực tiếp đến việc lắng nghe sự thay đổi trong products$.
   * Tóm lại, trong ngOnInit(), bạn đăng ký (subscribe) để lắng nghe sự thay đổi trong products$ và gọi phương thức getProducts() để lấy dữ liệu từ API. Khi có dữ liệu mới từ API và được truyền vào displayProductsSubject, callback function trong .subscribe() sẽ được gọi và dữ liệu sẽ được gán vào biến this.products để component có thể hiển thị nó.
   */
  ngOnInit(): void {
    // Lắng nghe sự thay đổi trong Subject
    this.subscription = this.productService.products$.subscribe(
      (items) => { this.products = items; },
      // (error) => { this.error = error; }
    );

    this.subscription.add(
      this.productService.getErrorSubject().subscribe(
        (error) => { this.error = error; }
      )
    );

    // Gọi phương thức để lấy dữ liệu từ API
    this.productService.getProducts();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //#region bengin method

  share() {
    window.alert('The product has been shared!');
  }
  NotifyFromAlert() {
    window.alert("Da nhan su kien tu ben alert component")
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        // Xử lý sau khi sản phẩm đã được xóa thành công
        // window.alert("Xóa thành công");
      },
      (error) => {
        // Xử lý khi xảy ra lỗi trong quá trình xóa sản phẩm
        console.log('Lỗi xóa sản phẩm:', error);
      }
    );
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(
      newProduct => {
        // Xử lý sau khi sản phẩm đã được tạo thành công
      },
      error => {
        // Xử lý khi xảy ra lỗi trong quá trình tạo sản phẩm
      }
    );
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(
      updatedProduct => {
        // Xử lý sau khi sản phẩm đã được cập nhật thành công
      },
      error => {
        // Xử lý khi xảy ra lỗi trong quá trình cập nhật sản phẩm
      }
    );
  }
  //#endregion
}
