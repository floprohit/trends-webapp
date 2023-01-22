import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http : HttpClient
  ) { }

  // function
  postApiWithoutToken(url:any,payload:any){
   return this.http.post<any>(url,payload)
  }

  // get api
  getApiWithoutToken(url:any){
    return this.http.get(url)
  }
}
