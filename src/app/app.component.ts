import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpRequests';

  _url: string = '';
  _data : any;
  constructor(private http: HttpClient) {

  }

  GetTitle(): string {
    return this.title;
  }

  DoGetRequest(url_: string): void {

    console.log('Iniciando.... ', this._url)
    this._url = url_;

    this.peticionGet(this._url)
    console.log('Finalizando Peticion Get!!!')

  }
  GetData(): string {
    return this._data;
  }

  peticionGet(url: string, params?: HttpParams) {
    console.log('Iniciando Peticion Get!!!')

    return this.http.put(url, null)
      .pipe(
        map(data => {
          console.log(url);
          console.log(data);

          this._data = data;
          return data;
        })).subscribe();
  }

}
