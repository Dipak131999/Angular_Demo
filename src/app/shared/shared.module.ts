import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlynumericDirective } from '../directives/onlynumeric.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OnlynumericDirective,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    OnlynumericDirective
  ]
})
export class SharedModule { }
