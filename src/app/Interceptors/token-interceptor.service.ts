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
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW9fZWxlY3Ryb25pY28iOiJBTkdFTDE5QEdNQUlMLkNPTSIsIm5vbWJyZV9jb21wbGV0byI6IkpPU0UgQU5HRUwgSEVSTkFOREVaIiwidXNlcm5hbWUiOiJBTkdFTDE5Iiwicm9sZSI6IltcIlJPTEVfVFJBU0xBRE9cIl0iLCJuYmYiOjE2MTY3OTQwODYsImV4cCI6MTYxNjc5NTg4NiwiaWF0IjoxNjE2Nzk0MDg2fQ.s_6lhGJz6J1y6A1Pc1otZNqqSqaDOKZOuc47W-3P8Ok'
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
