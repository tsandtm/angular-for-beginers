export class Product {
  id: number;
  name: string;
  price: number;
  description: string;

  constructor(data:any) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;

    // Xử lý dữ liệu khác trong model nếu cần
    this.doSomethingWithData();
  }

  private doSomethingWithData() {
    // Xử lý dữ liệu trong model nếu cần
  }
}
