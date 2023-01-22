import { Component, OnInit } from '@angular/core';
import{RestApiService} from 'src/app/core/services/rest-api/rest-api.service';
import {apiUrl} from "src/app/api-url"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[RestApiService]
})
export class HomeComponent implements OnInit {
  showLoader:boolean = false;
  p: number = 1;
  product_list:any;
 constructor(private RestApiService : RestApiService){
 }

 ngOnInit(): void {
  this.getAllProducts()
 }
 
 getAllProducts(){
 this.showLoader= true;
 this.RestApiService.getApiWithoutToken(apiUrl.productsList).subscribe((response:any)=>{
  this.showLoader= false;
  this.product_list = response.products
 })
 }

}
