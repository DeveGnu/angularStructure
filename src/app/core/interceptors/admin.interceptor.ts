import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('angular-testing-role');

    let request = req;

    if(token) {
      request = req.clone({
        setHeaders: {
          authorization: "Bearer" + token
        }
      });
    }

    console.log('===>request', request)
    return next.handle(request)
  }
}
