import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};


  userDetails: any=[];

  errorMessage: any;
  nextPage = '';
  successMessage: any;
  loginForm = this.formBuilder.group({
    sUsername: ['', Validators.required],
    sPassword: ['', Validators.required],
    snUserType: [3],
    sProviderName: [''],
  });
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private authService: AuthenticationService,

              private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.authService.signIn(this.form.value).subscribe((data: {}) => {
      console.log(this.form.value)
      alert(this.form.get("snUserType"));
      alert(this.form.value.SEmailId);
      this.userDetails=data;
      this.router.navigate(['/dashboard'])
      alert("success")
      console.log(this.userDetails)
    })
}
}
