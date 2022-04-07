import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private httpsUrl:string = "http://127.0.0.1:8000/api";

  constructor(private httpClient:HttpClient) { }

  getData(url:string){
    return this.httpClient.get(this.httpsUrl+url);
  }

  postData(url:string, data:any){
    return this.httpClient.post(this.httpsUrl+url, data);
  }

  put(url:string, data:any){
    return this.httpClient.put(this.httpsUrl+url, data);
  }


}
