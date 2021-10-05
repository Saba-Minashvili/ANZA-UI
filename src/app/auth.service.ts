import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsAuthenticatedAsUser():boolean {
    if(localStorage.getItem('token') != "admin"){
      return true;
    }else {
      return false;
    }
  }

  IsAuthenticatedAsAdmin():boolean {
    if(localStorage.getItem('token') == "admin"){
      return true;
    }else {
      return false;
    }
  }
}
