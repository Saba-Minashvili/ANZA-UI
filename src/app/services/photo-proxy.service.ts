import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoProxyService {

  constructor(private http:HttpClient) { }
  mainAccUrl:string = "https://localhost:44327/api/AccountPhoto";
  mainItemUrl:string = "https://localhost:44327/api/ItemPhoto"

  UploadAccountPhoto(obj:any){
    var url = this.mainAccUrl;
    return this.http.post(url, obj);
  }

  UploadItemPhoto(obj:any){
    var url = this.mainItemUrl;
    return this.http.post(url, obj);
  }

  GetAccountPhoto(accountId:number){
    var url = this.mainAccUrl + "/" + accountId;
    return this.http.get(url);
  }

  GetItemPhoto(itemId:number){
    var url = this.mainAccUrl + "/" + itemId;
    return this.http.get(url);
  }
}
