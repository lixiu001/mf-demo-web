import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Microfrontend3Component } from './microfrontend3/microfrontend3.component';
import { Microfrontend3RoutingModule } from './microfrontend3-routing.module';

@NgModule({
  declarations: [
    Microfrontend3Component,
    PageNotFoundComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, Microfrontend3RoutingModule],
  providers: [],
})
export class Microfrontend3Module {}
