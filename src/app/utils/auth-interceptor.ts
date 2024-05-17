import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";





@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('id')&&sessionStorage.getItem('password')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Basic ${btoa(`${sessionStorage.getItem('id')!.replaceAll('"', '')}:${sessionStorage.getItem('password')!.replaceAll('"', '')}`)}`,
        },
      });
    }
    return next.handle(req);
  }

}

