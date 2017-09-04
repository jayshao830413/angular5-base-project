import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class Login {
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.createForm();
  }

  loginForm: FormGroup;
  formSubmitted = false;
  errorMessage: string;
  user: User;
  createForm() {    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(event: Event) {
    this.formSubmitted = true;
    this.errorMessage = '';
    event.preventDefault();
    if(this.loginForm.valid) {
      this.user = new User(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
      this.loginService.authenticate(this.user)
        .then(response => {
          console.log(response);
        }, (error) => {
          this.errorMessage = error;
        });
    }
  }
}