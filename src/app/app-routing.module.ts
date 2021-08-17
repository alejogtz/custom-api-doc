import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApidocComponent } from './components/apidoc/apidoc.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'ApiDoc'},
  {path: 'Token', component: AppComponent},
  {path: 'ApiDoc', component: ApidocComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
