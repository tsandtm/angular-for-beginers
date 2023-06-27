import { Component } from '@angular/core';
import { Products } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...Products]

  share() {
    window.alert('The product has been shared!');
  }
  NotifyFromAlert(){
    window.alert("Da nhan su kien tu ben alert component")
  }
}
