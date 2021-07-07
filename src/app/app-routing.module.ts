import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page.component';
import { ReposComponent } from './components/repos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'intro'},
  {path: 'intro', component: FrontPageComponent},
  {path: 'repos', component: ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
