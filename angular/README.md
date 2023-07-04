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
- Tổ chức lại cấu trúc thư mục và định hình cách code, phục vụ việc mở rộng sau này
  - Component tiếp nhận các hành động của người dùng. Check các vấn đề liên quan đến trình diễn UI. Các logic độc lập chỉ mỗi ui sài thì viết ở component. check lỗi này nọ ở đây
  - Khi xảy ra các hành động cần các dùng dữ liệu có tính logic nghiệp vụ hoặc dữ liệu từ server
  - Các logic mang tính nghiệp vụ của đối tượng, thì dùng các phương thức của đối tượng. Check lỗi của đối tượng thì viết ở đây
  - Gọi đến service để lấy thông tin sài. Service nhận yêu cầu từ component, dùng thông tin component truyền xuống đẩy lên api.
  - Tiếp nhận phận hổi từ api trả về. Convert dữ liệu đúng định dạng, đưa vào kho tài nguyên trên client nếu cần
  - Trường hợp phản hồi từ api về lỗi thì bắt lỗi trả về cho component hiện ra ngoài, hoặc viết 1 phần lỗi chung gì đó để kích hoạt hiện ra ngoài
  - Trường hợp dữ liệu trả về ok nhưng khi convert lỗi thì viết phần lỗi ở đối tượng.
  - Phản hồi ngược lại cho component sài

- Hiểu và làm việc được với routing
  - Sinh ra module routing
  - Tìm hiểu lazyload
    - Sử dụng được source-map-explorer
  - Cách sử dụng ShareModule:
    - https://www.facebook.com/groups/AngularVietnam/permalink/890710838094435/
    - https://codeburst.io/lazy-loading-external-javascript-libraries-in-angular-3d86ada54ec7
  
# DAY 4




# LO TRINH
- xem cai 1 tram ngay…. no nhung thu minh co the dung o nhung bai viet 100 ngay do
code 1 project thuc te luon. dua vao cau truc 100 ngay do.

- Lựa chọn làm 1 trong các module sau:
    - quản lý sản phẩm và kho hàng
    - quan ly phan quyen.
- thiet ke UI full
- Lên plan làm
- Xem clip ecommercer, tập trung vào nội dung tổ chức service và model. Note tên các kỹ thuật angular cần dùng tương ứng cho các kịch bản UI
- day 4:
  - https://github.com/nartc/ng-auth-example/blob/main/app.module.ts
  - https://www.tiepphan.com/angular-router-series/
  - Xem phần router guard: https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day030-router-guards-resolvers.md
  - Tổ chức phần phân quyền.
  - https://github.com/ghoul007/Angular-project-structure/blob/master/src/app/core/auth/auth.module.ts



