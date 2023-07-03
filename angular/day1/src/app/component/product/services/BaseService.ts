import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';

export abstract class BaseService {
  protected errorSubject: Subject<string> = new Subject<string>();

  protected handleHttpError(error: HttpErrorResponse): Observable<never> {
    let _error: string;
    switch (error.status) {
      case 0:
        // Lỗi kết nối từ server (ERR_CONNECTION_REFUSED)
        // console.error('Lỗi kết nối:', error.message);
        _error = `'Lỗi kết nối:', ${error.message}`;
        break;
      case 403:
        // console.log("Lỗi phân quyền");
        _error = "Lỗi phân quyền";
        break;
      case 404:
        // console.log('Không tìm thấy dữ liệu');
        _error = 'Không tìm thấy dữ liệu';
        break;
      case 500:
        // console.log('Lỗi máy chủ');
        _error = 'Lỗi máy chủ';
        break;
      default:
        // Các lỗi HTTP khác
        // console.log('Lỗi HTTP:', error.status, error.statusText);
        _error = `'Lỗi HTTP:' ${error.error.message}`;
        break;
    }

    // Bắn lỗi ra ngoài component
    this.errorSubject.next(_error);

    // Ném lại lỗi gốc
    // console.log("// Ném lại lỗi gốc");
    return throwError(error);
  }

  getErrorSubject(): Observable<string> {
    return this.errorSubject.asObservable();
  }
}
