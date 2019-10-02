import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: './Public/public.module#PublicModule'},
  {path: 'public', loadChildren: './Public/public.module#PublicModule'},
   {path: 'private', loadChildren: './private/private.module#PrivateModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
