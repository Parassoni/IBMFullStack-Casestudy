import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { DetailGuardService } from './guard/navbar-guard.service';
import { AdminGuardService } from './guard/admin-guard.service';
import { HrGuardService } from './guard/hr-guard.service';
import { EmployeeGuardService } from './guard/employee-guard.service';
import { ReportsComponent } from './reports/reports.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [

  {path: '', component: NavbarComponent , canActivate: [DetailGuardService],
   children: [
  {path: 'admin', component: AdminDashboardComponent,
  canActivate: [AdminGuardService]},
  {path: 'reports' , component: ReportsComponent },
  {path: 'employee', component: EmployeeDashboardComponent,
  canActivate: [EmployeeGuardService] }, {path: 'hr', component: HrDashboardComponent, canActivate: [HrGuardService] },
  {path: 'edit', component: ProfileEditComponent}
 ]} ];

@NgModule ({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class PrivateRoutingModule { }
