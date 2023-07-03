# DAY 1
- khoi tao project
- tao project angular
- add merterial icon
- biet cach sai router co ban. truyen data qua lai giua cac component. su dung service

# DAY 2
- Sai json server de thay api https://www.npmjs.com/package/json-server
- thanh thao observable => Có 1 số ví dụ cách sử dụng observable. lưu trữ lại để đến lúc cần xem.
- to chuc code tan model vs service ok.

# DAY 3
- Xem clip ecommercer, tập trung vào nội dung tổ chức service và model. Note tên các kỹ thuật angular cần dùng tương ứng cho các kịch bản UI
- xem cai 1 tram ngay…. no nhung thu minh co the dung o nhung bai viet 100 ngay do
code 1 project thuc te luon. dua vao cau truc 100 ngay do.



# LO TRINH
- Lựa chọn làm 1 trong các module sau:
    - quản lý sản phẩm và kho hàng
    - quan ly phan quyen.
- thiet ke UI full
- Lên plan làm


  /**
   * Component tiếp nhận các hành động của người dùng. check các vấn đề liên quan đến trình diễn UI.
   * Khi xảy ra các hành động cần các dùng dữ liệu có tính logic nghiệp vụ hoặc dữ liệu từ server
   * - các logic độc lập chỉ mỗi ui sài thì viết ở component. check lỗi này nọ ở đây
   * - các logic mang tính nghiệp vụ của đối tượng, thì dùng các phương thức của đối tượng. check lỗi này nọ ở đây
   * - Các yêu cầu cung cấp dữ liệu thì gọi đến service
   * gọi đến service để lấy thông tin sài.
   * service nhận yêu cầu từ component, dùng thông tin component truyền xuống đẩy lên api.
   * Tiếp nhận phận hổi từ api trả về.
   * Covernt dữ liệu đúng định dạng, đưa vào kho tài nguyên trên client nếu cần
   * - trường hợp phản hồi từ api về lỗi thì bắt lỗi trả về cho component hiện ra ngoài, hoặc viết 1 phần lỗi chung gì đó để kích hoạt hiện ra ngoài
   * - trường hợp dữ liệu trả về ok nhưng khi convert lỗi thì viết phần lỗi ở đối tượng.
   * Phản hồi ngược lại cho component sài
   */