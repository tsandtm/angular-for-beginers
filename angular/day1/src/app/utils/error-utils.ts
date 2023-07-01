
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorUtils {
  static handleDefaultErrors(error: HttpErrorResponse): void {
    switch (error.status) {
      case 404:
        console.log('Không tìm thấy dữ liệu');
        throw throwError('Không tìm thấy dữ liệu');
      case 500:
        console.log('Lỗi máy chủ');
        throw throwError('Lỗi máy chủ');
      default:
        console.log('Lỗi không xác định');
        throw throwError('Lỗi không xác định');
    }
  }
}
