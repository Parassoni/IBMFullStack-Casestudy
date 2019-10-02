import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrmsLoginComponent } from './hrms-login/hrms-login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: HrmsLoginComponent},
  {path: 'register', component: RegisterComponent},
  // {path: 'private/:name', loadChildren: './private/private.module#PrivateModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
