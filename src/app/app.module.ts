import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.route';
import { LoginModule } from './login/login.module';

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
    routing
  ],
  declarations: [
    App
  ]
})
export class AppModule { }