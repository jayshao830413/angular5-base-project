import { CommonModule } from '@angular/common';
import { NgModule } from'@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Login } from './login.component';
import { LoginService } from './login.service';
import { routing } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService
  ],
  declarations: [
    Login
  ]
})
export class LoginModule {}