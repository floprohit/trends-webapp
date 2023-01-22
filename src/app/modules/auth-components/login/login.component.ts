import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RestApiService} from "../../../core/services/rest-api/rest-api.service";
import{CurrentUserService} from "src/app/core/services/current-user/current-user.service"
import {apiUrl} from "../../../api-url"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[RestApiService,CurrentUserService]
})
export class LoginComponent implements OnInit {
  loginForm:any = FormGroup;
  showLoader:boolean = false;
  constructor(
  private router : Router,
  private RestApiService : RestApiService,
  private CurrentUserService : CurrentUserService
  ) { }

  ngOnInit(): void {
  
    // condtion checked if user is login but user write path agian login without logout then not redirections 
    if(localStorage.getItem("isUserLoggedIn")){
      window.history.back()
    }

  this.loginForm = new FormGroup({
  email: new FormControl('',[Validators.required]),
  password: new FormControl ('',Validators.required)
  })


  }

  // function to form submit
  formSubmit(){

    let payload={
    username: this.loginForm.value.email,
    password: this.loginForm.value.password,
    }

    if(this.loginForm.valid){
    this.showLoader = true;
    this.RestApiService.postApiWithoutToken(apiUrl.login,payload).subscribe(response=>{
      this.showLoader = false;
    if(response.token){
    this.CurrentUserService.setVerfiedUser(response);
    localStorage.setItem("currenUserToken",response.token);
    this.router.navigate(['/home']);
    }
  },
    error=>{
      this.showLoader = false;
    alert(error?.error?.message);
    }
  )
  } 
  }

}
