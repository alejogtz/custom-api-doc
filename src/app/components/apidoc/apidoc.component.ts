import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: [
    './apidoc.component.css'
  ]
})
export class ApidocComponent implements OnInit {

  public TAB_1: number = 1;
  public TAB_2: number = 2;
  public TAB_3: number = 3;
  public TAB_4: number = 5;
  public TAB_5: number = 4;

  @ViewChild('Method') Method: ElementRef;
  @ViewChild('ourl') Url: ElementRef;
  @ViewChild('Token') IsToken: ElementRef;

  @ViewChild('valor') variable_valor: ElementRef;


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

  obj: Resultado;

  UriParams: URIParam[];
  SearchParams: URIParam[];
  BodyParams: URIParam[];

  active: number = this.TAB_4;
  constructor() {
    this.UriParams = [];
    this.SearchParams = [];
  }

  ngOnInit(): void {
  }

  OnImportDataChange(){
    this.corta.nativeElement.value = this.obj.descripcion_titulo;
    this.descripcion.nativeElement.value = this.obj.descripcion;
    this.infoextra.nativeElement.value = this.obj.informacion_extra;

    this.Method.nativeElement.value = this.obj.metodo.toUpperCase();
    this.Url.nativeElement.value = this.obj.raw_url || `${new URL(this.variable_valor.nativeElement.value).protocol}//${new URL(this.variable_valor.nativeElement.value).host}${this.obj.titulo}`;

    this.BodyParams = this.obj.parametros_body;
    this.UriParams = this.obj.parametros_uri;
    this.SearchParams = this.obj.parametros_query;

    this.httpsample.nativeElement.value = this.obj.ejemplos_http[0] || '';
    this.jsexample.nativeElement.value = this.obj.ejemplos_javascript[0] || '';

    this.okresponse.nativeElement.value = this.obj.ejemplos_respuestas
    .find( o=> o.codigo ==200)?.data || '';
    this.badresponse.nativeElement.value = this.obj.ejemplos_respuestas
    .find( o=> o.codigo ==400)?.data || '';

    this.JsonBody.nativeElement.value = this.obj.body_post || '';
    this.sqlsample.nativeElement.value = this.obj.sql_function || '';

  }

  Clean(){

    this.obj = {} as Resultado;

    // this.corta.nativeElement.value = '';
    this.descripcion.nativeElement.value = '';
    this.infoextra.nativeElement.value = '';

    this.Method.nativeElement.value = 'GET';
    this.Url.nativeElement.value = '';

    this.BodyParams = [];
    this.UriParams = [];
    this.SearchParams = [];

    this.httpsample.nativeElement.value = '';
    this.jsexample.nativeElement.value = '';

    this.sqlsample.nativeElement.value = '';
    this.JsonBody.nativeElement.value = '';

    this.okresponse.nativeElement.value = '';
    this.badresponse.nativeElement.value = '';

    this.resultadofinal = {} as Resultado;
    this.active = this.TAB_4;

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
    const aux = new URL(this.Url.nativeElement.value);
    return aux.pathname
      .split('/')
      .filter(o => o != '')
      .map(o => decodeURI(o))
      .join('-') + '.' + (this.Method.nativeElement.value as string).toLocaleLowerCase();
  }

  GenerateAPI(): void {
    let FullUrl = this.Url.nativeElement.value;

    const myUrl = new URL(FullUrl);

    this.UriParams = myUrl.pathname
      .split('/')
      .filter(o => decodeURI(o).startsWith('{'))
      .map((o: string) => {
        return {
          uuid: this.uuidv4(),
          nombre: decodeURI(o).toUpperCase(),
          tipo: this.GetTipo(o), descripcion: '', extra_info: '', obligatorio: true
        };
      });

    this.SearchParams = [];

    myUrl.searchParams
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
        tipo: this.GetTipo(json_data[o].toString()), 
        descripcion: '',        
        extra_info: '',
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
    else if (valor.match("^[0-9]+$"))
      return "int"
    else if (!isNaN(parseFloat(valor)))
      return "double"
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

  //#endregion

  //#region Generar File and descargar

  LoadData(file: FileList | null): void {
    let files = file as FileList
    const fr = new FileReader();
    fr.readAsText(files[0]);
    fr.onload =  () => {
      const txt = fr.result as string;
      this.obj = (JSON.parse(txt) as Resultado);

      this.resultadofinal= this.obj;

      this.OnImportDataChange();

    };
  }

  dynamic_text(): string {
    const aux = new URL(this.Url.nativeElement.value);

    let otroexample: string = '';
    if (this.Method.nativeElement.value == 'POST')
     otroexample = `${decodeURI(aux.toString())}\n${this.JsonBody.nativeElement.value}`;

    const resultado: Resultado = {
      metodo: this.Method.nativeElement.value,
      titulo: decodeURI(new URL(this.Url.nativeElement.value).pathname),
      descripcion_titulo: this.corta.nativeElement.value,
      descripcion: this.descripcion.nativeElement.value,
      token: this.IsToken.nativeElement.checked,
      informacion_extra: this.infoextra.nativeElement.value,

      body_post : this.JsonBody.nativeElement.value || '',
      sql_function: this.sqlsample.nativeElement.value || '',
      raw_url: this.Url.nativeElement.value || '',

      parametros_uri: this.UriParams,
      parametros_body: this.BodyParams,
      parametros_query: this.SearchParams,

      ejemplos_http: [(this.httpsample.nativeElement.value as string)]
      .filter(str=>str.trim() != ''),

      ejemplos_javascript: [this.jsexample.nativeElement.value,otroexample]
        .filter(str=>str.trim() != ''),


      ejemplos_respuestas: [
        { codigo: 200, data: this.okresponse.nativeElement.value },
        { codigo: 400, data: this.badresponse.nativeElement.value },
        { codigo: 500, data: '{"mensaje": "ha ocurrido un error. consulte al administrador"}' },
      ].filter(str=>str.data.trim() != '')
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

  body_post: string;
  sql_function: string;
  raw_url: string;
}

export interface URIParam {
  uuid: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  extra_info: string;
  obligatorio: boolean;
}

export interface EjemploRespuesta {
  codigo: number;
  data: string;
}