import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContactComponent } from './components/form-contact.component';
import { FrontPageComponent } from './components/front-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'intro'},
  {path: 'intro', component: FrontPageComponent},
  {path: 'contact', component: FormContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
