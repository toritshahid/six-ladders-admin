import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  credentials: any;
  isLoggedIn = false;
  isLoginFailed = false;
  username!: string;
  password!: string;
  roles: string[] = [];
  errorMessage: any;
  nextPage = '';
  successMessage: any;
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,

              private router: Router) { }

  ngOnInit(): void {

  }
  login(): void{
    if (true){
    }
    else{
      this.nextPage = '/login';
      alert('username or password Incorrect');
    }
  }
  onSubmit(): void {
    this. credentials = this.loginForm.value;
    this.username = this.credentials.username;
    this.password = this.credentials.password;
    this.login();
  }
}
