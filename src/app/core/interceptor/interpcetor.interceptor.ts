import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg: string;

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMsg = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;

          // Optional: Handle specific status codes (e.g., 401 Unauthorized)
          if (error.status === 401) {
            this.authService.logout();
          }
        }

        // Log the error or show a user-friendly message
        console.error(errorMsg);
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
