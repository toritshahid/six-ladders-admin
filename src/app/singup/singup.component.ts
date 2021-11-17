import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {



  roles: string[] = [];
  errorMessage: any;
  nextPage = '';
  successMessage: any;
  userDetails: any=[];
  form= this.formBuilder.group({
    SnUserType: [1],
    SEmailId: ['', Validators.required],
    SPassword: ['', Validators.required],
    SFirstName: ['', Validators.required],
    SLastName:['', Validators.required],
    SInterface:['www.6led.com']
  });
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private signupService: AuthenticationService,private authService: SocialAuthService ,

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
    this.signupService.createUser(this.form.value).subscribe((data: {}) => {
      console.log(this.form.value)
      alert(this.form.get("SnUserType"));
      alert(this.form.value.SEmailId);
      this.userDetails=data;
      this.router.navigate(['/dashboard'])
      alert("success")
      console.log(this.userDetails)
    })
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
