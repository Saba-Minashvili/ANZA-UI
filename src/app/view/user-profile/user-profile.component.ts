import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountProxyService } from 'src/app/services/account-proxy.service';
import { PhotoProxyService } from 'src/app/services/photo-proxy.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser:any;
  display:boolean = false;
  imageUrl:any;
  currestUserId:number = Number(localStorage.getItem('id'));
  @ViewChild('username') username:ElementRef;
  @ViewChild('profilePhoto') profilePhoto:ElementRef;
  constructor(private accountHttp:AccountProxyService,
              private router:Router,
              private photoHttp:PhotoProxyService) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getProfilePhoto();
    this.display = false;
  }
  
  getCurrentUser(){
    this.accountHttp.ReadByProp(this.currestUserId).subscribe(response => {
      this.currentUser = response;
      (this.username.nativeElement as HTMLDivElement).innerHTML = this.currentUser.firstName.substr(0,1).toUpperCase() + this.currentUser.firstName.substr(1) + " " + 
                      this.currentUser.lastName.substr(0,1).toUpperCase() + this.currentUser.lastName.substr(1);
    });
  } 

  uploadBtnClick(){
    this.display = true;
  }

  settingsBtnClick(){
    this.display = true;
  }

  getProfilePhoto():any {
    this.photoHttp.GetAccountPhoto(this.currestUserId).subscribe(response => {
      this.imageUrl = response;
    });
  }
}
