import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountProxyService } from 'src/app/services/account-proxy.service';
import { ItemProxyService } from 'src/app/services/item-proxy.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  result:any=[];
  cnt:number = 0;
  currentUser:any;
  currentUserId:string = localStorage.getItem('id');
  response:any;
  @ViewChild('accountSelection') accountSelection:ElementRef;
  @ViewChild('profileSelection') profileSelection:ElementRef;
  @ViewChild('myAccount') myAccount:ElementRef;
  @ViewChild('profileBtn') profileBtn:ElementRef;

  constructor(private itemHttp:ItemProxyService, 
              private accountHttp:AccountProxyService,
              private router:Router) {
  }
  
  ngOnInit(): void {
    this.getAllProducts();
    this.getCurrentUser();
  }

  getAllProducts() {
    this.itemHttp.Read().subscribe(data =>{
      this.result = data;
    })
  }

  showAccountWindow() {
    (this.accountSelection.nativeElement as HTMLDivElement).style.visibility = "visible";
    this.cnt++;
    this.checkAccountWindowVisible();
  }

  hideAccountWindow(){
    (this.accountSelection.nativeElement as HTMLDivElement).style.visibility = "hidden";
    (this.accountSelection.nativeElement as HTMLDivElement).style.background = "#FFFFFF"
  }

  checkAccountWindowVisible(){
    if(this.cnt == 2){
      this.hideAccountWindow();
      this.cnt = 0;
    }
  }

  showProfileWindow() {
    (this.profileSelection.nativeElement as HTMLDivElement).style.visibility = "visible";
    this.cnt++;
    this.checkProfileWindowVisible();
  }

  hideProfiletWindow(){
    (this.profileSelection.nativeElement as HTMLDivElement).style.visibility = "hidden";
    (this.profileSelection.nativeElement as HTMLDivElement).style.background = "#FFFFFF"
  }

  checkProfileWindowVisible(){
    if(this.cnt == 2){
      this.hideProfiletWindow();
      this.cnt = 0;
    }
  }
  
  getCurrentUser():any {
    if(localStorage.getItem('id') != null){
      this.accountHttp.ReadByProp(Number(this.currentUserId)).subscribe(response => {
        this.currentUser = response;
        (this.myAccount.nativeElement as HTMLDivElement)
        .innerHTML = 
          this.currentUser.firstName.substr(0,1).toUpperCase() + this.currentUser.firstName.substr(1) + " " + 
          this.currentUser.lastName.substr(0,1).toUpperCase() + this.currentUser.lastName.substr(1);
        (this.myAccount.nativeElement as HTMLDivElement).style.pointerEvents = "none";
        (this.profileBtn.nativeElement as HTMLDivElement).style.pointerEvents = "all";
      });
    }else {
      return false;
    }
  }

  onLogOutBtnClick() {
    localStorage.clear();
    window.location.reload();
    this.ngOnInit();
  }
}
