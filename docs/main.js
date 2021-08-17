(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\Angular\HttpRequests\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["user"];
const _c1 = ["pass"];
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'HttpRequests';
        this.token_value = '';
        this.refresh_token = '';
        this._url = '';
        this._data = '';
        this.usuario = '';
        // ##########################################################################################################################
        //###########################################################################################################################
        this.byteArray = [];
        this.imagen = null;
        this._data = JSON.parse('{"hola":"1234"}');
        this.usuario = 'CONTRIBUYENTE_FISICO@HOTMAIL.COM';
    }
    UpdateUsuario(value) {
        this.usuario = value;
    }
    GetTitle() {
        return this.title;
    }
    GetJson() {
        return this._data;
    }
    peticionGet(url, token) {
        console.log('Iniciando Peticion Get!!!');
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Genus ' + token) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            console.log(url);
            console.log(data);
            this._data = data;
            return data;
        })).subscribe();
    }
    peticionRefreshAuth(url, accessToken, refreshToken) {
        console.log('Iniciando Peticion Get!!!');
        return this.http.post(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('AccessToken', accessToken)
            .set('RefreshToken', refreshToken))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log(url);
            console.log(data);
            this.token_value = data['accesstoken'];
            this.refresh_token = data['refreshToken'];
            // this._data = JSON.stringify(data);
            return data;
        })).subscribe();
    }
    peticionLogin(url, params) {
        console.log('Iniciando Peticion Get!!!');
        const body1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('usuario', this.userInput.nativeElement.value)
            .set('password', this.passInput.nativeElement.value)
            .set('sistema', "TRASLADO");
        return this.http.post(url, body1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            this.token_value = data['accesstoken'];
            this.refresh_token = data['refreshToken'];
            // this._data = data;
            return data;
        })).subscribe();
    }
    GetData() {
        return JSON.stringify(this._data, null, 2);
    }
    ChangeData() {
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
        console.warn(this._data);
    }
    PeticionPostJSON(url, token) {
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
  `;
        return this.http.post(url, body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Genus ' + token).set('Content-Type', 'application/json') })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            console.log(url);
            console.log(data);
            this._data = data;
            return data;
        })).subscribe();
    }
    convertDataURIToBinary(dataURI) {
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
    upload(event) {
        console.log(event);
        const file = event.target.files[0];
        this.imagen = file;
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.userInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.passInput = _t.first);
    } }, decls: 56, vars: 6, consts: [[1, "row"], [1, "one-half", "column"], ["for", "abcd"], ["id", "abcd", "type", "text", 1, "u-full-width", 3, "value"], ["token", ""], ["for", ""], ["type", "text", 1, "u-full-width", 3, "value"], ["refreshToken", ""], ["name", "user", "id", "id-user", 1, "u-full-width", 3, "change"], ["suser", ""], ["value", "ALEJO"], ["selected", "", "value", "CONTRIBUYENTE_FISICO@HOTMAIL.COM"], ["value", "coordinador_desarrollo_urbano@hotmail.com"], ["for", "id-user"], ["type", "text", "name", "user", "id", "id-user", 1, "u-full-width", 3, "value"], ["user", ""], ["type", "password", "name", "pass", "id", "id-pass", "value", "123456", 1, "u-full-width"], ["pass", ""], ["name", "uris", "id", "", 1, "u-full-width"], ["text_url_login", ""], ["value", "http://genusserver.com/ws/gnsaplication/login/auth"], ["selected", "", "value", "http://genusserver.com:8283/wsauthorization/saiglogin/auth"], [1, "u-full-width", 3, "click"], [1, "container"], [1, "urls"], ["type", "text", "value", "http://94.74.69.84/ws/huixquilucantd/trasladodominio/consultas/propietario?usuario=ANGEL&accion=nuevo_propietario"], ["text_url_GET", ""], [3, "click"], [1, "login"], ["for", "url-label"], ["type", "text", "value", "http://genusserver.com/ws/gnsaplication/login/auth_refresh"], ["text_url_refresh", ""], [2, "height", "600px", "overflow-y", "auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "TOKEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " REFRESH TOKEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return ctx.UpdateUsuario(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Alejo Traslado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "CONTRIBUYENTE_FISICO@HOTMAIL.COM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "coordinador_desarrollo_urbano@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "User: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Pass: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Genus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "SAIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29); return ctx.peticionLogin(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return ctx.peticionGet(_r6.value, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); return ctx.peticionRefreshAuth(_r7.value, _r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_54_listener() { return ctx.ChangeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Change Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.token_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.refresh_token);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 4, ctx.usuario));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.GetData());
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n        display: grid; \r\n        grid-template-columns: 1fr 1fr; \r\n        grid-template-rows: 1fr; \r\n        gap: 1em 1em; \r\n    }\r\n\r\n    .login[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .login[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7IFxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7IFxyXG4gICAgICAgIGdhcDogMWVtIDFlbTsgXHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2lue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbiA+ICp7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./principal/principal.component */ "novI");
/* harmony import */ var _components_apidoc_apidoc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/apidoc/apidoc.component */ "yMtC");
/* harmony import */ var _pipes_cast_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/cast.pipe */ "yZ0i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"],
        _components_apidoc_apidoc_component__WEBPACK_IMPORTED_MODULE_5__["ApidocComponent"],
        _pipes_cast_pipe__WEBPACK_IMPORTED_MODULE_6__["CastPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "novI":
/*!**************************************************!*\
  !*** ./src/app/principal/principal.component.ts ***!
  \**************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PrincipalComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) { return new (t || PrincipalComponent)(); };
PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrincipalComponent, selectors: [["app-principal"]], decls: 1, vars: 0, template: function PrincipalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_apidoc_apidoc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/apidoc/apidoc.component */ "yMtC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'ApiDoc' },
    { path: 'Token', component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
    { path: 'ApiDoc', component: _components_apidoc_apidoc_component__WEBPACK_IMPORTED_MODULE_2__["ApidocComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yMtC":
/*!*******************************************************!*\
  !*** ./src/app/components/apidoc/apidoc.component.ts ***!
  \*******************************************************/
/*! exports provided: ApidocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApidocComponent", function() { return ApidocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["Method"];
const _c1 = ["ourl"];
const _c2 = ["Token"];
const _c3 = ["jsonbody"];
const _c4 = ["titulo"];
const _c5 = ["descripcion"];
const _c6 = ["corta"];
const _c7 = ["jsexample"];
function ApidocComponent_tr_108_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_108_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _param_r15 = ctx.$implicit; const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _param_r15.nombre = _r17.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 58, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_108_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _param_r15 = ctx.$implicit; const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _param_r15.tipo = _r18.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 58, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_108_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _param_r15 = ctx.$implicit; const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return _param_r15.descripcion = _r19.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_108_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _param_r15 = ctx.$implicit; const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _param_r15.obligatorio = _r20.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_tr_108_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _param_r15 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.DeleteUriParam(_param_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _param_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r15.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r15.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r15.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r15.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r15.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r15.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r15.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _param_r15.obligatorio);
} }
function ApidocComponent_tr_126_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_126_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _param_r27 = ctx.$implicit; const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _param_r27.nombre = _r29.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 58, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_126_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _param_r27 = ctx.$implicit; const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _param_r27.tipo = _r30.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 58, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_126_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _param_r27 = ctx.$implicit; const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return _param_r27.descripcion = _r31.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_126_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _param_r27 = ctx.$implicit; const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _param_r27.obligatorio = _r32.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_tr_126_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _param_r27 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.DeleteUrlParam(_param_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _param_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r27.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r27.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r27.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r27.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r27.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r27.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r27.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _param_r27.obligatorio);
} }
function ApidocComponent_tr_144_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_144_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _param_r39 = ctx.$implicit; const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _param_r39.nombre = _r41.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 58, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_144_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _param_r39 = ctx.$implicit; const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _param_r39.tipo = _r42.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 58, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_144_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _param_r39 = ctx.$implicit; const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return _param_r39.descripcion = _r43.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApidocComponent_tr_144_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _param_r39 = ctx.$implicit; const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _param_r39.obligatorio = _r44.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_tr_144_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _param_r39 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.DeleteBodyParam(_param_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _param_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r39.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r39.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r39.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r39.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r39.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _param_r39.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", _param_r39.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _param_r39.obligatorio);
} }
class ApidocComponent {
    constructor() {
        this.serie = 0;
        this.active = 1;
        this.UriParams = [];
        this.SearchParams = [];
    }
    ngOnInit() {
    }
    //#region Lo mero mero
    Descargar() {
        this.download_file(this.GenerateNameFile(), this.dynamic_text());
    }
    GenerateNameFile() {
        return this.CurrentUrl.pathname
            .split('/')
            .filter(o => o != '')
            .join('-') + '.' + this.Method.nativeElement.value.toLocaleLowerCase();
    }
    GenerateAPI() {
        let FullUrl = this.Url.nativeElement.value;
        const myUrl = new URL(FullUrl);
        this.CurrentUrl = myUrl;
        this.UriParams = this.CurrentUrl.pathname.split('/').filter(o => o != '')
            .map((o) => {
            return {
                uuid: this.uuidv4(), nombre: o.toUpperCase(),
                tipo: this.GetTipo(o), descripcion: '', extra_info: '', obligatorio: true
            };
        });
        this.SearchParams = [];
        this.CurrentUrl.searchParams
            .forEach((value, key, search_params) => {
            this.SearchParams.push({
                uuid: this.uuidv4(), nombre: key.toUpperCase(),
                tipo: this.GetTipo(search_params.get(key) || ''),
                descripcion: '',
                extra_info: '',
                obligatorio: true
            });
        });
        this.JsonToArray();
    }
    DeleteUriParam(obj) {
        this.UriParams = this.UriParams.filter(function (el) { return el != obj; });
    }
    DeleteUrlParam(obj) {
        this.SearchParams = this.SearchParams.filter(function (el) { return el != obj; });
    }
    DeleteBodyParam(obj) {
        this.BodyParams = this.BodyParams.filter(function (el) { return el != obj; });
    }
    replacee(val, _replace, _new_value) {
        return val.replace(_replace, _new_value);
    }
    GetDefault(variable) {
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
            let aux = {
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
    GetTipo(valor) {
        if (valor.toUpperCase() == "TRUE" || valor.toUpperCase() == "FALSE")
            return "bool";
        else if (!isNaN(parseFloat(valor)) || !isNaN(parseInt(valor)))
            return "int";
        else
            return "string";
    }
    GetJson() {
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
    dynamic_text() {
        const otroexample = `${this.CurrentUrl.toString()}\n${this.JsonBody.nativeElement.value}`;
        const resultado = {
            metodo: this.Method.nativeElement.value,
            titulo: this.titulo.value,
            descripcion_titulo: this.corta.value,
            descripcion: this.descripcion.value,
            token: this.IsToken.nativeElement.checked,
            informacion_extra: 'Info Extra Pendiente',
            ejemplos_http: [this.JsonBody.nativeElement.value
                    .replace(' ', '')
                    .replace('\n', '')
                    .replace('\t', '')],
            ejemplos_javascript: [this.jsexample.value, otroexample],
            parametros_body: this.BodyParams,
            parametros_query: this.SearchParams,
            parametros_uri: this.UriParams
        };
        return JSON.stringify(resultado);
    }
    download_file(name, contents, mime_type) {
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
}
ApidocComponent.ɵfac = function ApidocComponent_Factory(t) { return new (t || ApidocComponent)(); };
ApidocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApidocComponent, selectors: [["app-apidoc"]], viewQuery: function ApidocComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Method = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Url = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.IsToken = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.JsonBody = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titulo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.descripcion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.corta = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.jsexample = _t.first);
    } }, decls: 154, vars: 16, consts: [[1, "container"], [1, "row"], [1, "three", "columns"], ["for", "titulo"], ["type", "text", "id", "titulo", 1, "u-full-width"], ["titulo", ""], [1, "four", "columns"], ["for", "descripcion-corta"], ["type", "text", "id", "descripcion-corta", 1, "u-full-width"], ["corta", ""], [1, "five", "columns"], ["for", "descripcion"], ["type", "text", "id", "descripcion", 1, "u-full-width"], ["descripcion", ""], ["for", "Variable"], ["type", "text", "id", "URL", 1, "u-full-width", 3, "value"], ["variablee", ""], ["for", "Value"], ["type", "url", "value", "https://genusserver.com:8083/wssaig", "placeholder", "https://genusserver.com:8083/wssaig", "id", "URL", 1, "u-full-width"], ["valor", ""], [1, "one", "column"], [1, "u-center-abs", 3, "click"], [1, "two", "columns"], ["for", "Method"], ["id", "Method", 1, "u-full-width"], ["Method", ""], ["value", "GET", "selected", ""], ["value", "POST"], [1, "six", "columns"], ["for", "URL"], ["type", "text", "placeholder", "genusserver.com:8083/", "id", "URL", 1, "u-full-width"], ["ourl", ""], [1, "need-token", "u-center-abs"], ["type", "checkbox", "checked", ""], ["Token", ""], [1, "label-body"], ["for", "Body"], ["placeholder", "{...}", "id", "Body", 1, "u-full-width"], ["jsonbody", ""], ["for", "Example"], ["placeholder", "var let = x.ToString()", "id", "Example", 1, "u-full-width"], ["jsexample", ""], ["for", "SQL"], ["placeholder", "SELECT * FROM FN_TAB_.", "id", "SQL", 1, "u-full-width"], ["sqlExample", ""], ["placeholder", "{...}", "id", "SQL", 1, "u-full-width"], ["sqlresponse", ""], [1, "tab-nav"], [1, "button", 3, "click"], [1, "tab-content"], ["id", "one", 1, "tab-pane"], [1, "u-full-width"], [4, "ngFor", "ngForOf"], ["id", "two", 1, "tab-pane"], ["id", "three", 1, "tab-pane"], [3, "click"], [1, "nine", "columns"], [1, "button-primary", 3, "click"], ["type", "text", 1, "u-full-width", 3, "value", "id", "change"], ["txtname", ""], ["txttipo", ""], ["txtdescripcion", ""], ["type", "checkbox", 1, "u-full-width", 3, "checked", "id", "change"], ["txtobligatorio", ""]], template: function ApidocComponent_Template(rf, ctx) { if (rf & 1) {
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Titulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripcion Corta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Variable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r6.value = ctx.replacee(_r6.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Replace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Enter URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Is token Neccessary??");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_button_click_55_listener() { return ctx.GenerateAPI(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "GO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "JSON Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Javascript Example Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "SQL Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "textarea", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "SQL Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "textarea", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_a_click_82_listener() { return ctx.active = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "URI Params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_a_click_85_listener() { return ctx.active = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Search params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_a_click_88_listener() { return ctx.active = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Body Params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ApidocComponent_tr_108_Template, 17, 9, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ApidocComponent_tr_126_Template, 17, 9, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, ApidocComponent_tr_144_Template, 17, 9, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_button_click_147_listener() { return ctx.Log(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApidocComponent_Template_button_click_152_listener() { return ctx.Descargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.GetDefault("saig-debug"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.UriParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.BodyParams);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaWRvYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwaWRvYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiwgLmNvbHVtbnN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "yZ0i":
/*!************************************!*\
  !*** ./src/app/pipes/cast.pipe.ts ***!
  \************************************/
/*! exports provided: CastPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastPipe", function() { return CastPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CastPipe {
    transform(value, args) {
        return value;
    }
}
CastPipe.ɵfac = function CastPipe_Factory(t) { return new (t || CastPipe)(); };
CastPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cast", type: CastPipe, pure: true });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map