import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-errors',
  template: `
  <!-- <ul *ngIf="isShowError()">
    <li>{{getErrorMsg()}}</li>
  </ul> -->
  `,
  styles: [
  ]
})
export class ErrorsComponent {
  // @Input()
  // private Control: AbstractControlDirective | AbstractControl;
//  static readonly errosmessages={
//    required : (params: any) => 'this field is requried',
//    vaildEmail: (params:any) => params.message,
//  }

//  //function to check input control errors
//   isShowError(){
//   this.formControl && this.formControl.errors && (this.formControl.dirty || this.formControl.touched)
//   }
  
//   //function to return the error message
//   getErrorMsg(){
//     Object.keys(this.formControl.errors).forEach(field=>{
//       let msg = ErrorsComponent.errosmessages[field].(this.formControl.errors[field])
//     })
//     return msg
//   }
}
