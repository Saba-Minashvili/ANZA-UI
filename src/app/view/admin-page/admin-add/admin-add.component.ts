import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemProxyService } from 'src/app/services/item-proxy.service';
import { PhotoProxyService } from 'src/app/services/photo-proxy.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  selectedTypeId:any;
  itemAdd:FormGroup;
  itemPhoto:any;
  itemTypes:any;
  filteredItemTypes:Array<any> = [];
  //#region 
  itemColors:any[] = [
    {ItemColor:"Black", ItemColorId:1},
    {ItemColor:"Brown", ItemColorId:2},
    {ItemColor:"Blue", ItemColorId:3},
    {ItemColor:"Green", ItemColorId:4},
    {ItemColor:"Purple", ItemColorId:5},
    {ItemColor:"Red", ItemColorId:6},
    {ItemColor:"White", ItemColorId:7},
    {ItemColor:"Pink", ItemColorId:8},
    {ItemColor:"Orange", ItemColorId:9},
    {ItemColor:"Gray", ItemColorId:10},
  ]
  //#endregion
  //#region
  itemSizes:any[] = [
    {ItemSize:"XS/S", ItemSizeId:2},
    {ItemSize:"S", ItemSizeId:3},
    {ItemSize:"M", ItemSizeId:4},
    {ItemSize:"M/L", ItemSizeId:5},
    {ItemSize:"L", ItemSizeId:6},
    {ItemSize:"XL", ItemSizeId:7},
    {ItemSize:"XXL", ItemSizeId:8},
    {ItemSize:"Other", ItemSizeId:9}
  ]
  //#endregion
  itemMaterialTypes:any;
  filteredMaterialTypes:Array<any> = [];

  selectedFile:File = null;

  constructor(private itemHttp:ItemProxyService, 
              private router:Router,
              private photoHttp:PhotoProxyService,) {
    this.itemAdd = new FormGroup({
    ItemPhoto: new FormControl(),
    Type: new FormControl(),
    Name: new FormControl(),
    Color: new FormControl(),
    Size: new FormControl(),
    MaterialType: new FormControl(),
    DesignedFor: new FormControl(),
    Price: new FormControl(),
    Description: new FormControl()
    });
  }

  ngOnInit() {
    this.getItemTypes();
  }

  public createItemForm(){
    this.itemAdd = new FormGroup({
      'ItemPhoto':new FormControl(null, Validators.required),
      'Type':new FormControl(null, Validators.required),
      'Name':new FormControl(null,Validators.required),
      'Color':new FormControl(null,Validators.required),
      'Size':new FormControl(null,Validators.required),
      'MaterialType':new FormControl(null,Validators.required),
      'DesignedFor':new FormControl(null,Validators.required),
      'Price':new FormControl(null, Validators.required),
      'Description':new FormControl(null, Validators.required)
    });
  }

  public onItemAddSubmit(){
    try
    {
      var itemInformation = this.itemAdd.value as any;
      this.itemHttp.Add(itemInformation).subscribe(response => {
        this.itemAdd.reset();
        console.log(itemInformation);
        console.log(response);
      });
    }
    catch
    {
      console.log("Error occured!")
    }
  }

  selectChangeHandler(event:any){
    this.selectedTypeId = event.target.value;
    this.getItemMaterialTypes();
  }

  public getItemTypes(){
    this.itemHttp.ReadItemTypes().subscribe(response => {
      this.itemTypes = response;
      this.itemTypes.forEach(obj => {
        this.filteredItemTypes.push({ItemType:obj.item1, ItemTypeId:obj.item2})
      });
    })
  }

  public getItemMaterialTypes(){
    this.itemHttp.ReadItemMaterialTypes(this.selectedTypeId).subscribe(response => {
      this.itemMaterialTypes = response;
      this.itemMaterialTypes.forEach(obj => {
        this.filteredMaterialTypes.push({MaterialTypeName:obj});
      });
    })
  }

  public onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }

  public onFileUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.photoHttp.UploadItemPhoto(fd).subscribe(response => {
      console.log(response);
    })
  }
}
