import { Component,OnInit } from '@angular/core';
import { apiUrl } from 'src/app/api-url';
import { RestApiService } from 'src/app/core/services/rest-api/rest-api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export  class ListComponent implements OnInit {
  showLoader:boolean = false;
  p:number = 1;
  list_product:any;
constructor(private RestApiService :RestApiService){

}

ngOnInit():void{
this.getAllProducts()
}

// function to get all products
getAllProducts(){
  this.showLoader = true
  this.RestApiService.getApiWithoutToken(apiUrl.productsList).subscribe((response:any)=>{
  this.showLoader = false;
  this.list_product = response.products
})
}

}
