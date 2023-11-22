import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ElternComponent } from './eltern/eltern.component';
import { KinderComponent } from './eltern/kinder/kinder.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ElternComponent,
    KinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
