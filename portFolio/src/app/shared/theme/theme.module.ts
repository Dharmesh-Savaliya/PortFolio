import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThmMenuComponent } from './thm-menu/thm-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ThmMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ThmMenuComponent
  ]
})
export class ThemeModule { }
