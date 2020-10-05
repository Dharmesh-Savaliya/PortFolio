import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './page/personal/personal.component';
import { HomeComponent } from './page/home/home.component';
import { ProfessionalComponent } from './page/professional/professional.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home' , pathMatch:'full'},
  { path: 'personal',  component:  PersonalComponent , pathMatch:'full'},
  { path: 'home',  component:  HomeComponent , pathMatch:'full'},
  { path: 'professional',  component:  ProfessionalComponent , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
