import {
  AfterViewInit, Component,
  ElementRef, EventEmitter, Output, ViewChild
} from '@angular/core';
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

  token_value: string = '';
  refresh_token: string = '';

  _url: string = '';
  _data: any = '';


  @ViewChild('user') userInput: ElementRef;
  @ViewChild('pass') passInput: ElementRef;

  usuario: string = '';

  constructor(private http: HttpClient) {
    this._data = JSON.parse('{"hola":"1234"}')
    this.usuario = 'CONTRIBUYENTE_FISICO@HOTMAIL.COM'
  }

  UpdateUsuario(value: string) {
    this.usuario = value;
  }

  GetTitle(): string {
    return this.title;
  }
  GetJson() {
    return this._data;
  }
  peticionGet(url: string, token: string) {
    console.log('Iniciando Peticion Get!!!')

    return this.http.get(url, { headers: new HttpHeaders().set('Authorization', 'Genus ' + token) })
      .pipe(
        map(data => {
          console.log(url);
          console.log(data);

          this._data = data;
          return data;
        })).subscribe();
  }


  peticionRefreshAuth(url: string, accessToken: string, refreshToken: string) {
    console.log('Iniciando Peticion Get!!!')

    return this.http.post(url, new HttpParams()
      .set('AccessToken', accessToken)
      .set('RefreshToken', refreshToken))
      .pipe(
        map((data: any) => {
          console.log(url);
          console.log(data);

          this.token_value = data['accesstoken'];
          this.refresh_token = data['refreshToken'];


          // this._data = JSON.stringify(data);
          return data;
        })).subscribe();
  }

  peticionLogin(url: string, params?: HttpParams) {
    console.log('Iniciando Peticion Get!!!')

    const body1 = new HttpParams().set('usuario', this.userInput.nativeElement.value)
      .set('password', this.passInput.nativeElement.value)
      .set('sistema', "TRASLADO");

    return this.http.post(url, body1
    )
      .pipe(
        map((data: any) => {
          this.token_value = data['accesstoken'];
          this.refresh_token = data['refreshToken'];

          // this._data = data;
          return data;
        })).subscribe();
  }
GetData(){
  return JSON.stringify(this._data, null, 2)
}

  ChangeData(){    
    this._data = JSON.parse(`{
      "modo_rollback":true,
      "usuario":"ALEJO",
      "accion":"NUEVO",
      "descuento": {
          "fecha_inicio": "03-02-2021",
          "fecha_fin": "",
          "permanente": "SI",
          "clave": "AAB",
          "oid_tipo_unidad": "1",
          "descripcion": "TEST",
          "descuento": "20",
          "oid_justificacion": "1",
          "oid_aplicar": "1",
          "oid_usuario": "1",
          "limite_inferior": "100",
          "limite_superior": "999999",
          "automatico": "SI",
          "anio_inicio_desc": "2021",
          "anio_fin_desc": "2021"
      }
  }`);
  console.warn(this._data)
  }


  PeticionPostJSON(url: string, token: string) {

    var body = `{
      "modo_rollback":true,
      "usuario":"ALEJO",
      "accion":"NUEVO",
      "descuento": {
          "fecha_inicio": "03-02-2021",
          "fecha_fin": "",
          "permanente": "SI",
          "clave": "AAB",
          "oid_tipo_unidad": "1",
          "descripcion": "TEST",
          "descuento": "20",
          "oid_justificacion": "1",
          "oid_aplicar": "1",
          "oid_usuario": "1",
          "limite_inferior": "100",
          "limite_superior": "999999",
          "automatico": "SI",
          "anio_inicio_desc": "2021",
          "anio_fin_desc": "2021"
      }
  }
  `

    return this.http.post(url, body,
      { headers: new HttpHeaders().set('Authorization', 'Genus ' + token).set('Content-Type', 'application/json') })
      .pipe(
        map(data => {
          console.log(url);
          console.log(data);

          this._data = data;
          return data;
        })).subscribe();
  }

  // ##########################################################################################################################

  //###########################################################################################################################

  byteArray: any = []
  convertDataURIToBinary(dataURI: any) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }



  imagen: any = null;
  upload(event: any) {
    console.log(event)
    const file = event.target.files[0];
    this.imagen = file

    var me = this;
    const reader = new FileReader();
    // this.imagen = reader.readAsDataURL(file)
    // let byteArray;

    reader.addEventListener("loadend", () => {
      // convert image file to base64 string
      //console.log('base64', reader.result);
      this.byteArray = me.convertDataURIToBinary(reader.result);
      // console.log('byte array', byteArray);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

}
