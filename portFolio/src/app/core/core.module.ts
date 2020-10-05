import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsService } from './models/services/details.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[DetailsService]
})
export class CoreModule { }
