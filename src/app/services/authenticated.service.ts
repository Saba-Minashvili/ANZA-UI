import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {

  constructor() { }

  IsAuthenticated(){
    if(localStorage.getItem('token') != "admin"){
      return true;
    }else {
      return false;
    }
  }

  IsAuthenticatedAsAdmin(){
    if(localStorage.getItem('token') == "admin"){
      return true;
    }else {
      return false;
    }
  }
}
