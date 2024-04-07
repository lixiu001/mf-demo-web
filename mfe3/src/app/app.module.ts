import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Microfrontend3Module } from './microfrontend3/microfrontend3.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Microfrontend3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
