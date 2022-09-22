import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { OutputAreaComponent } from './output-area/output-area.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAreaComponent,
    OutputAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
