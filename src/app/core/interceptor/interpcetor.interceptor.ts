import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // intercept(
  //   request: HttpRequest<unknown>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<unknown>> {
  //   request.headers.set(
  //     'Authorization',
  //     'Bearer c736ae7fef54584b925ad77f6b2ccecf0d302c50c0bbce1ca2ef024321a46574'
  //   );
  //   return next.handle(request);
  // }

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // // Get the auth token from the service.
    // const authToken = this.auth.getAuthorizationToken();

    // // Clone the request and replace the original headers with
    // // cloned headers, updated with the authorization.

    const token = localStorage.getItem('token');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
