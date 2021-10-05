import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountProxyService {

  constructor(private http:HttpClient) { }
  mainUrl:string = "https://localhost:44327/api";

  public SignIn(obj:any):any {
    var url:string = this.mainUrl + "/SignIn"
    return this.http.post(url, obj);
  }

  public SignUp(obj:any) {
    var url:string = this.mainUrl + "/Account";
    return this.http.post(url, obj);
  }

  public SignOut(){
    localStorage.clear();
  }

  public Read(){
    var url:string = this.mainUrl + "/Account"
    return this.http.get(url);
  }

  public ReadByProp(id:number){
    var url:string = this.mainUrl + "/Account/" + id;
    return this.http.get(url);
  }

  public Delete(id:number){
    var url:string = this.mainUrl + "/Account/" + id;
    return this.http.delete(url);
  }

  public Update(id:number, obj:any){
    var url:string = this.mainUrl + "/Account/" + id;
    return this.http.put(url, obj);
  }
}
