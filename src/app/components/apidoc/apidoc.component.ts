import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: ['./apidoc.component.css']
})
export class ApidocComponent implements OnInit {

  @ViewChild('Method') Method: ElementRef;
  @ViewChild('ourl') Url: ElementRef;
  @ViewChild('Token') IsToken: ElementRef;

  @ViewChild('infoextra') infoextra: ElementRef;
  @ViewChild('descripcion') descripcion: ElementRef;
  @ViewChild('corta') corta: ElementRef;

  // TEXT AREAS
  @ViewChild('jsonbody') JsonBody: ElementRef;
  @ViewChild('httpexample') httpsample: ElementRef;
  @ViewChild('jsexample') jsexample: ElementRef;
  @ViewChild('sqlsample') sqlsample: ElementRef;
  @ViewChild('okresponse') okresponse: ElementRef;
  @ViewChild('badresponse') badresponse: ElementRef;

  @ViewChild('jsonresultado') resultado: ElementRef;
  resultadofinal: any = '';


  UriParams: URIParam[];
  SearchParams: URIParam[];
  BodyParams: URIParam[];

  EjemplosRespuestas: EjemploRespuesta[];

  public CurrentUrl: URL;

  serie: number = 0;

  active: number = 1;
  constructor() {
    this.UriParams = [];
    this.SearchParams = [];
    this.EjemplosRespuestas = [];
  }

  ngOnInit(): void {
  }

  GenerarJson() {
    this.resultadofinal = JSON.parse(this.dynamic_text());
  }

  //#region Lo mero mero
  Descargar(): void {
    // this.download_file(this.GenerateNameFile(), this.dynamic_text());
    this.download_file(this.GenerateNameFile(), this.resultado.nativeElement.value);
  }

  GenerateNameFile(): string {
    return this.CurrentUrl.pathname
      .split('/')
      .filter(o => o != '')
      .map(o => decodeURI(o))
      .join('-') + '.' + (this.Method.nativeElement.value as string).toLocaleLowerCase();
  }

  GenerateAPI(): void {
    let FullUrl = this.Url.nativeElement.value;

    const myUrl = new URL(FullUrl);

    this.CurrentUrl = myUrl;

    this.UriParams = this.CurrentUrl.pathname.split('/').filter(o => decodeURI(o).startsWith('{'))
      .map((o: string) => {
        return {
          uuid: this.uuidv4(),
          nombre: decodeURI(o).toUpperCase(),
          tipo: this.GetTipo(o), descripcion: '', extra_info: '', obligatorio: true
        };
      });

    this.SearchParams = [];

    this.CurrentUrl.searchParams
      .forEach((value: string, key: string, search_params: URLSearchParams) => {

        this.SearchParams.push({
          uuid: this.uuidv4(),
          nombre: key.toString().toUpperCase(),
          tipo: this.GetTipo(search_params.get(key) || ''),
          descripcion: '',
          extra_info: '',
          obligatorio: true
        });
      });


    this.JsonToArray();
  }
  DeleteUriParam(obj: URIParam) {
    this.UriParams = this.UriParams.filter(function (el) { return el != obj; });
  }
  DeleteUrlParam(obj: URIParam) {
    this.SearchParams = this.SearchParams.filter(function (el) { return el != obj; });
  }
  DeleteBodyParam(obj: URIParam) {
    this.BodyParams = this.BodyParams.filter(function (el) { return el != obj; });
  }


  replacee(val: any, _replace: string, _new_value: string): string {
    return (val as string).replace(_replace, _new_value);
  }

  GetDefault(variable: string): string {
    switch (variable) {
      case "saig-debug":
        return "{{saig-debug}}";

      default:
        return "";
    }
  }

  //#endregion
  //#region Utils
  Log() {
    console.log(this.UriParams);
  }
  JsonToArray() {
    if (this.JsonBody.nativeElement.value == '') {
      this.BodyParams = [];
      return;
    }
    const json_data = JSON.parse(this.JsonBody.nativeElement.value);
    let result = [];

    for (const o in json_data) {
      let aux: URIParam = {
        uuid: this.uuidv4(), nombre: o.toUpperCase(),
        tipo: this.GetTipo(json_data[o].toString()), descripcion: '',
        obligatorio: true
      };
      result.push(aux);
    }

    this.BodyParams = result;

  }
  // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  GetTipo(valor: string): string {
    if (valor.toUpperCase() == "TRUE" || valor.toUpperCase() == "FALSE")
      return "bool"
    else if (!isNaN(parseFloat(valor)) || !isNaN(parseInt(valor)))
      return "int"
    else
      return "string"
  }

  GetJson(): string {
    return `{
      "modo_rollback": true,
      "cco": "0950100515000000",
      "folio": "FTD0000000112",
      "usuario": "ARTURO",
      "observaciones": "EJ. OBS.",
      "oid_descuento": 0,
      "oid_forma_pago": 1,
      "oid_caja": 2,
      "cantidad": 300
  }`;
  }


  GetCorrectUrl() {
    return `${this.CurrentUrl.protocol}://${this.CurrentUrl.hostname}`;
  }

  //#endregion

  //#region Generar File and descargar
  dynamic_text(): string {

    const otroexample = `${decodeURI(this.CurrentUrl.toString())}\n${this.JsonBody.nativeElement.value}`;

    const resultado: Resultado = {
      metodo: this.Method.nativeElement.value,
      titulo: decodeURI(this.CurrentUrl.pathname),
      descripcion_titulo: this.corta.nativeElement.value,
      descripcion: this.descripcion.nativeElement.value,
      token: this.IsToken.nativeElement.checked,
      informacion_extra: this.infoextra.nativeElement.value,
      ejemplos_http: [(this.JsonBody.nativeElement.value as string)],
      ejemplos_javascript: [this.httpsample.nativeElement.value, this.jsexample.nativeElement.value, otroexample],
      parametros_body: this.BodyParams,
      parametros_query: this.SearchParams,
      ejemplos_respuestas: [
        { codigo: 200, data: this.okresponse.nativeElement.value },
        { codigo: 400, data: this.badresponse.nativeElement.value },
        { codigo: 500, data: '{"mensaje": "ha ocurrido un error. consulte al administrador"}' },
      ],
      parametros_uri: this.UriParams
    }

    return JSON.stringify(resultado);
  }

  download_file(name: string, contents: string, mime_type?: string) {
    mime_type = mime_type || "text/plain";

    var blob = new Blob([contents], { type: mime_type });

    var dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = (e) => {
      // revokeObjectURL needs a delay to work properly
      setTimeout(() => {
        window.URL.revokeObjectURL(dlink.href);
      }, 1500);
    };

    dlink.click();
    dlink.remove();
  }
  //#endregion
}

interface Parametro {
  uuid: string;
  name: string;
  tipo: string;
  value: string;
}

export interface Resultado {
  metodo: string;
  titulo: string;
  descripcion_titulo: string;
  descripcion: string;
  token: boolean;
  informacion_extra: string;
  parametros_uri: URIParam[];
  parametros_query: URIParam[];
  parametros_body: URIParam[];
  ejemplos_http: string[];
  ejemplos_respuestas: EjemploRespuesta[];
  ejemplos_javascript: string[];
}

export interface URIParam {
  uuid: string;
  nombre: string;
  tipo: string;
  descripcion?: string;
  extra_info?: string;
  obligatorio: boolean;
}

export interface EjemploRespuesta {
  codigo: number;
  data: string;
}