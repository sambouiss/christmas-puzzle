import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookieComponent } from './cookie/cookie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'cookies', component: CookieComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
