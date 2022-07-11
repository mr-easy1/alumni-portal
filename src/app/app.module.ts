import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExitportalComponent } from './exitportal/exitportal.component';
import { Exitportal1Component } from './exitportal1/exitportal1.component';

@NgModule({
  declarations: [
    AppComponent,
    ExitportalComponent,
    Exitportal1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
