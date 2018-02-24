import { Routes, RouterModule } from '@angular/router';
import { Login } from './login.component';
import { NgModule } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const loginRoutes: Routes = [
  {
    path: 'login',
    component: Login,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LoginRoutingModule {}
