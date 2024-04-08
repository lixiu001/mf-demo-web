import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfaElementSrcDirective } from '../directives/element-src.directive';



@NgModule({
  declarations: [MfaElementSrcDirective],
  imports: [
    CommonModule
  ],
  exports: [MfaElementSrcDirective ]
})
export class SharedModule { }
