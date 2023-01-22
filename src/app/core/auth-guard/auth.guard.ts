import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{CurrentUserService} from "src/app/core/services/current-user/current-user.service"

@Injectable({
  providedIn: 'root',

})
export class AuthGuard implements CanActivate {
  constructor(private CurrentUserService : CurrentUserService,private route : Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn  = this.CurrentUserService.isUserAuthenticated();
      if(isLoggedIn){
    return true;
      } else{
        this.route.navigate(['/login'])
        return false
      }
  }
  
}
