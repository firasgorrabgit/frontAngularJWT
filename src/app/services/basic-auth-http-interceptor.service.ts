import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthHttpInterceptorService implements HttpInterceptor {
  
  constructor() { }
  //sessionStorage.getItem('basicauth')
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("token interceptor  ->  "+ sessionStorage.getItem('Bearertoken') );
  
    if (sessionStorage.getItem('username') && sessionStorage.getItem('Bearertoken')
 ) {

  req = req.clone({
  setHeaders: {
  
  Authorization: sessionStorage.getItem('Bearertoken') 
  //sessionStorage.getItem('basicauth')
  }
  })
  }
  return next.handle(req);
  }
  
 }
