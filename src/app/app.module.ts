import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './Interceptors/token-interceptor.service';
import { PrincipalComponent } from './principal/principal.component';
import { ApidocComponent } from './components/apidoc/apidoc.component';
import { CastPipe } from './pipes/cast.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ApidocComponent,
    CastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    
    //{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
