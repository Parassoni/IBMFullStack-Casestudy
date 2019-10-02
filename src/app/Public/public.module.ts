import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HrmsLoginComponent } from './hrms-login/hrms-login.component';
import { PublicRoutingModule} from './public-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HrmsLoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  PublicRoutingModule
  ],
  exports: [HrmsLoginComponent]

})
export class PublicModule {
HrmsLoginComponent;
RegisterComponent;

 }
