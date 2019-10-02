import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrivateRoutingModule } from './private-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReportsComponent } from './reports/reports.component';
// import { ChartsModule } from 'ng2-charts';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';


import { ChartsModule } from 'ng2-charts';
import { MyDoughnutComponent } from './my-doughnut-chart1/my-doughnut-chart1.component';
import { CardComponent } from './card/card.component';


@NgModule({
  providers: [],
  declarations: [
    AdminDashboardComponent,
    HrDashboardComponent,
    EmployeeDashboardComponent,
    NavbarComponent,
    ProfileEditComponent,
    ReportsComponent,
    MyDoughnutChartComponent,
    MyDoughnutComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
})
// tslint:disable-next-line:align

export class  PrivateModule {
 }
