import { Routes, RouterModule } from '@angular/router';
import { Login } from './login.component';
import { NgModule } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: Login
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {}