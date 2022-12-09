import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface authResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  errorMsg: string;
  constructor(private http: HttpClient) {}

  signUp(email: any, password: any) {
    return this.http
      .post<authResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzL8zNgGMXrJKHkNJpmNphHPTvthIXJG0',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      // .pipe(
      //   catchError((errorRes) => {
      //     let errorMsg = 'An unknown error occured!This email exists already';

      //     if (!errorRes.error || !errorRes.error.error) {
      //       return throwError(() => errorMsg);
      //     }
      //     switch (errorRes.error.error.message) {
      //       case 'Email exists':
      //         this.errorMsg = 'This email exists already';
      //     }
      //     return throwError(() => errorMsg);
      //   })
      // );
  }
}
