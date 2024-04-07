import { MicrofrontendModule } from './microfrontend/microfrontend.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NzTableModule,
    NzButtonModule,
    NzListModule,
    BrowserModule,
    AppRoutingModule,
    MicrofrontendModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
