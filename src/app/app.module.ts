import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CasComponent } from './cas/cas.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';

@NgModule({
  declarations: [
    AppComponent,
    CasComponent,
    TemoignagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
