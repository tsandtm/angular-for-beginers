
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


/**
 * Nhận vào lỗi. Check thử có nằm trong các lỗi mặc định, thường gặp ko.
 * Nếu là các lỗi này thì báo về hệ thống
 */

export class ErrorUtils {
  // static handleDefaultErrors(error: HttpErrorResponse): string {

  //   if (error.error instanceof ErrorEvent) {
  //     // Lỗi do lỗi mạng hoặc lỗi không xác định
  //     // console.error('Lỗi mạng hoặc lỗi không xác định:', error.error.message);
  //     return `'Lỗi mạng hoặc lỗi không xác định:' ${error.error.message}`;
  //   }

  //   switch (error.status) {
  //     case 0:
  //       // Lỗi kết nối từ server (ERR_CONNECTION_REFUSED)
  //       // console.error('Lỗi kết nối:', error.message);
  //       return `'Lỗi kết nối:', ${error.message}`;
  //     case 404:
  //       // console.log('Không tìm thấy dữ liệu');
  //       return 'Không tìm thấy dữ liệu';
  //     case 500:
  //       // console.log('Lỗi máy chủ');
  //       return 'Lỗi máy chủ';
  //     default:
  //       // Các lỗi HTTP khác
  //       // console.error('Lỗi HTTP:', error.status, error.statusText);
  //       return `'Lỗi HTTP:' ${error.error.message}`;
  //   }
  // }
}
