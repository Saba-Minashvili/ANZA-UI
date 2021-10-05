import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService:AuthService, 
              private router:Router) {}

  canActivate():boolean { 
    if(this.authService.IsAuthenticatedAsUser())
    {
      return true;
    }
    else {
      this.router.navigate(['/user-sign/in']);
      return false;
    }
  }

  canActivateChild():boolean {
    if(this.canActivate()){
      return true;
    }else{
      return false;
    }
  }
}

@Injectable()
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService:AuthService, 
    private router:Router) {}

  canActivate():boolean { 
    if(this.authService.IsAuthenticatedAsAdmin())
    {
      return true;
    }
    else {
      this.router.navigate(['/user-sign/in']);
      return false;
    }
  }

  canActivateChild():boolean {
    if(this.canActivate()){
      return true;
    }else{
      return false;
    }
  }
}
