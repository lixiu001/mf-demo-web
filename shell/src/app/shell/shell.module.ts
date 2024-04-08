import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellRoutingModule } from './shell-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MfaElementSrcDirective } from './directives/element-src.directive';


@NgModule({
  declarations: [LayoutComponent, HomeComponent,MfaElementSrcDirective],
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  exports: [
    MfaElementSrcDirective
  ]
})
export class ShellModule {
}
