import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ModalModule } from 'ngx-bootstrap';

// App is our top level component
import { App } from './app.component';

@NgModule({
  bootstrap: [App],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    App,
  ],
})
export class AppModule { }
