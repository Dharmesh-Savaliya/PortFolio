import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThmMenuComponent } from './thm-menu/thm-menu.component';

@NgModule({
  declarations: [ThmMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ThmMenuComponent
  ]
})
export class ThemeModule { }
