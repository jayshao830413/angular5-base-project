import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
  ],
  providers: [
    LoginService,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {}
