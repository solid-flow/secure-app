import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customers',
    canLoad: [AuthGuard],
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
