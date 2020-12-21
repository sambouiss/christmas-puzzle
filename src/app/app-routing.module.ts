import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandComponent } from './band/band.component';
import { CookieComponent } from './cookie/cookie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'cookies', component: CookieComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'bands',component:BandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
