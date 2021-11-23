import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApidocComponent } from './components/apidoc/apidoc.component';
import { CodesnippetgeneratorComponent } from './components/codesnippetgenerator/codesnippetgenerator.component';
import { UtilsAppsComponent } from './components/utils-apps/utils-apps.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'VSCode' },
  { path: 'Token', component: AppComponent },
  { path: 'ApiDoc', component: ApidocComponent },
  { path: 'Utils', component: UtilsAppsComponent },
  { path: 'VSCode', component: CodesnippetgeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
