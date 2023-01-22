import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route : Router){}

  // function to logout 
  logout(){
    localStorage.clear();
    this.route.navigate(['/login'])
  }

  // function to use routes navigation
  routerLink(url:any){
this.route.navigate([url])
  }
}
