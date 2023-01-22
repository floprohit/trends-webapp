import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-errors',
  template: `
  <ul *ngIf="isShowError()">
    <li>{{getErrorMsg()}}</li>
    <!-- <li>required</li> -->
  </ul>
  `,
  styles: [
  ]
})
export class ErrorsComponent {

   errosmessages={
   required : (params:any) => 'this field is requried',
   vaildEmail: (params:any) => params.message,
 }
 @Input()
   control: AbstractControlDirective | AbstractControl | any;
 constructor() { }
 //function to check input control errors
  isShowError(){
return this.control && this.control.errors && (this.control.dirty || this.control.touched)
  }
  
  //function to return the error message
  getErrorMsg(){
    let msg:any
    Object.keys(this.control.errors).forEach((field)=>{
        msg = this.errosmessages[field as keyof typeof this.errosmessages](this.control.errors[field]) 
    })
    return msg
  }
}
