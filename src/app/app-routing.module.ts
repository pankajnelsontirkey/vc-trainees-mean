import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './auth.guard';


  const routes: Routes = [
  {path : '' , component:LoginComponent},
  {path : 'login' , component:LoginComponent},
  {path :  'admin',component:AdminComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponent =[LoginComponent,AdminComponent]
