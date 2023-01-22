import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { }

  // function to store user details
  
  setVerfiedUser(user:any){
    if(user){
      const parseToken = this.parseJwt(user.token);
      localStorage.setItem("currentUserId",JSON.stringify(parseToken.id));
      localStorage.setItem("currentUser",JSON.stringify(parseToken));
      localStorage.setItem("currenUserToken",user.token);
      localStorage.setItem("isUserLoggedIn",'true')
    }
  }

   /**
   * Convert token
   * @param token 
   * @returns 
   */
   parseJwt(token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  // verfify user if already login
  isUserAuthenticated(){
    if(localStorage.getItem("isUserLoggedIn")){
       let user:any = localStorage.getItem("currentUser");
       let currentUser = JSON.parse(user)
       return currentUser
    } else{
     return false
    }
  }
}
