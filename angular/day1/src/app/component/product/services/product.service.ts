import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //#region private property
  private apiURL = "http://localhost:5000/"
  private products: Product[] = [];
  private displayProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);  //theo doi su thay doi cua product. Chi co service product moi day du lieu
  //#region

  products$: Observable<Product[]> = this.displayProductsSubject.asObservable(); //de ben ngoai xem du lieu

  constructor(private http: HttpClient) { }

/**
 * Kịch bản 1:
 * - lấy dữ liệu lên. đưa vào bộ nhớ local. show ra ngoài.
 * - trường hợp thêm mới hay xóa gì thì remote trong dữ liệu local => truyền thông dữ liệu có thay đổi.
 */


  //get all product
  getProducts() {
    if (this.products.length === 0) {
      this.http.get<any[]>(this.apiURL + "products").pipe(
        map((data) => {
          // Biến đổi dữ liệu từ API thành mảng các đối tượng Product
          const products = data.map((item) => new Product(item.id, item.name, item.price, item.description));

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
    return this.http.get<any>(this.apiURL + "products/" + id).pipe(
      map((data) => new Product(data.id, data.name, data.price, data.description))
    );
  }


  //create

  //update

  //delete
}
