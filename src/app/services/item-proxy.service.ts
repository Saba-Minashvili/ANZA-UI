import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemProxyService {

  constructor(private http:HttpClient) { }
  mainUrl:string = "https://localhost:44327/api/Item";

  public Add(obj:any){
    var url:string = this.mainUrl;
    return this.http.post(url, obj);
  }

  public Read(){
    var url:string = this.mainUrl;
    return this.http.get(url);
  }

  public ReadById(id:number){
    var url:string = this.mainUrl + "/" + id;
    return this.http.get(url);
  }

  public ReadByName(itemName:string){
    var url:string = this.mainUrl + "/searchBy/" + itemName;
    return this.http.get(url);
  }

  public ReadByPrice(itemPrice:number){
    var url:string = this.mainUrl + "/searchBy/" + itemPrice;
    return this.http.get(url);
  }

  public ReadByType(itemType:string){
    var url:string = this.mainUrl + "/searchBy/" + itemType;
    return this.http.get(url);
  }

  public Delete(id:number){
    var url:string = this.mainUrl + "/" + id;
    return this.http.delete(url);
  }

  public Update(id:number, obj:any){
    var url:string = this.mainUrl + "/" + id;
    return this.http.put(url, obj);
  }

  // getting item types from database
  public ReadItemTypes(){
    var url:string = "https://localhost:44327/api/ItemTypes";
    return this.http.get(url);
  }

  // getting types of item materials from database
  public ReadItemMaterialTypes(itemTypeId:number){
    var url:string = "https://localhost:44327/api/MaterialTypes/" +  itemTypeId;
    return this.http.get(url);
  }
}
