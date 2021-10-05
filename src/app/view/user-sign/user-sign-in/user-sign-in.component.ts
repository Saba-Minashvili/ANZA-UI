import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { AccountProxyService } from 'src/app/services/account-proxy.service';
import { Router  } from '@angular/router';
import { AuthenticatedService } from 'src/app/services/authenticated.service';
import { HttpContext } from '@angular/common/http';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  @ViewChild('invalidValuesWarn') invalidValues:ElementRef;
  constructor(private accountHttp:AccountProxyService, 
              private router:Router,
              private authentication:AuthenticatedService) {}
  ngOnInit(): void {
    // reset login status
    this.accountHttp.SignOut();
  }

  onSignInSubmit(form:NgForm) {
    var userInformation = form.value as any;
    this.accountHttp.SignIn(userInformation).subscribe(response => {
      if(response != null){
        localStorage["token"] = response.bearerToken;
        localStorage["id"] = response.id;
        this.redirectTo();
      }else {
        (this.invalidValues.nativeElement as HTMLDivElement).style.visibility = "visible";
      }
    });
  }

  redirectTo(){
    if(this.authentication.IsAuthenticated()){
      // navigate to user page
      this.router.navigate(['']);
    }else if(this.authentication.IsAuthenticatedAsAdmin()){
      // navigate to admin page
      this.router.navigate(['admin']);
    }
  }
}
