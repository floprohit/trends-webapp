import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any = FormGroup;

  constructor(
  private router : Router
  ) { }

  ngOnInit(): void {
  
  this.loginForm = new FormGroup({
  email: new FormControl('',[Validators.required,]),
  password: new FormControl ('',Validators.required)
  })

  }

  // function to form submit
  formSubmit(){
    debugger
    let payload={
      username: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
  if(this.loginForm.valid){
 
    } 
  }

}
