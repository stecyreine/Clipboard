import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {  Observable} from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    console.log('appelé');
    const apikey = environment.API_KEY;
    console.log(apikey);

    const reqWithHeader = request.clone({
    
      headers: request.headers.set('X-Api-Key', apikey ),
    
    });
    return next.handle(reqWithHeader);


    
  }
}
