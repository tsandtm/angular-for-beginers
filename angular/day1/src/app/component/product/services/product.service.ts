import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

import { API_ENDPOINTS } from 'src/config/api.config';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //#region private property
  private products: Product[] = [];
  private displayProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);  //theo doi su thay doi cua product. Chi co service product moi day du lieu
  //#region

  products$: Observable<Product[]> = this.displayProductsSubject.asObservable(); //de ben ngoai xem du lieu

  constructor(private http: HttpClient) { }

  //get all product
  /**
   * Trong đoạn code trên, việc gọi .subscribe() sau khi thực hiện http.get() là để kích hoạt yêu cầu HTTP và lắng nghe dữ liệu trả về từ API.
   * Trong Angular, các yêu cầu HTTP như http.get() trả về một Observable để bạn có thể theo dõi và xử lý dữ liệu khi nó được trả về từ API. Tuy nhiên, một Observable không thực hiện bất kỳ yêu cầu HTTP nào cho đến khi bạn gọi phương thức .subscribe() trên nó. Điều này giống như việc "kích hoạt" yêu cầu HTTP và bắt đầu nhận dữ liệu từ API.
   * Trong đoạn code của bạn, việc gọi .subscribe() trong phương thức getProducts() đảm bảo rằng yêu cầu GET sẽ được gửi đến API và bạn sẽ nhận được dữ liệu trả về. Tuy nhiên, trong trường hợp này, bạn không cần thực hiện bất kỳ xử lý nào trên dữ liệu trả về từ API, vì bạn đã xử lý nó trong phần map() trong pipe. Do đó, bạn có thể sử dụng .subscribe() mà không cần truyền bất kỳ callback function nào vào đó.
   * Nếu bạn không gọi .subscribe() sau khi gọi http.get(), yêu cầu GET sẽ không được gửi và dữ liệu từ API sẽ không được truyền vào displayProductsSubject. Điều này có nghĩa là không có ai sẽ nhận được thông tin về sản phẩm từ service và component cũng sẽ không nhận được bất kỳ dữ liệu nào để hiển thị.
   */
  getProducts() {
    if (this.products.length === 0) {
      this.http.get<any[]>(API_ENDPOINTS.products).pipe(
        map((data) => {
          // Biến đổi dữ liệu từ API thành mảng các đối tượng Product
          const products = data.map((item) => {
            return new Product(item);
          });

          // Lưu trữ dữ liệu vào mảng products
          this.products = products;

          // Truyền thông tin về sản phẩm ra bên ngoài bằng Subject
          this.displayProductsSubject.next(this.products);
        })
      ).subscribe();
    }
  }



  //get one
  getProduct(id: number): Observable<Product> {
    return this.http.get<any>(`${API_ENDPOINTS.product}/${id}`).pipe(
      map((data) => {
        return new Product(data)
      })
    );
  }


  //create

  //update

  //delete
}
