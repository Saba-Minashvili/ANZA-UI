import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountProxyService } from 'src/app/services/account-proxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  userSignUp:FormGroup;
  constructor(private accounthttp:AccountProxyService, 
              private router:Router) {
    this.userSignUp = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      accountImage: new FormControl(),
      emailAddress: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
   });
  }

  ngOnInit(): void {
  }

  public createUserSignUpForm(){
    this.userSignUp = new FormGroup({
      'firstname':new FormControl(null, Validators.required),
      'lastName':new FormControl(null, Validators.required),
      'accountImage':new FormControl(null,Validators.required),
      'emailAddress':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'confirmPassword':new FormControl(null,Validators.required)
    });
  }

  public onSignUpSubmit(){
    try
    {
      var userInformation = this.userSignUp.value as any;
      this.accounthttp.SignUp(userInformation).subscribe(response => {
        this.userSignUp.reset();
        this.router.navigate(['/user-sign/in']);
      });
    }
    catch
    {
      console.log("Error occured!")
    }
  }
}
