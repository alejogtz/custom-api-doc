import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    console.log('Iniciando Token Interceptor Service...')
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW9fZWxlY3Ryb25pY28iOiJBTkdFTDE5QEdNQUlMLkNPTSIsIm5vbWJyZV9jb21wbGV0byI6IkpPU0UgQU5HRUwgSEVSTkFOREVaIiwidXNlcm5hbWUiOiJBTkdFTDE5Iiwicm9sZSI6IltcIlJPTEVfVFJBU0xBRE9cIl0iLCJuYmYiOjE2MTcwNDgzNDEsImV4cCI6MTYxNzA1MDE0MSwiaWF0IjoxNjE3MDQ4MzQxfQ.RXTldB_-RCEXajLJTdCuxcQb2SoWan4m0ZEWtJSw1kA'
    if (token != null) {
      console.log(token);
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Genus ' + token)
        //.set('Access-Control-Allow-Origin', '*')
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
