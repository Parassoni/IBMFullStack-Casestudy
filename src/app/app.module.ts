import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './Public/public.module';
// import { CommonModule } from '@angular/common';
import {PrivateModule} from './Private/private.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicModule,
    PrivateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
