import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonalComponent } from './page/personal/personal.component';
import { ProfessionalComponent } from './page/professional/professional.component';
import { HomeComponent } from './page/home/home.component';
import { CoreModule } from './core/core.module';
import { EducationComponent } from './page/education/education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ProfessionalComponent,
    HomeComponent,
    EducationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
