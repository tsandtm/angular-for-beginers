import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { BaseService } from 'src/app/core/BaseService';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  /**
   * truyền vào username pass gì đó. lấy dữ liệu phần quyền
   */
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
