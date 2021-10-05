import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemProxyService } from 'src/app/services/item-proxy.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private itemHttp:ItemProxyService) { }
  items:any;
  itemId:any;
  display:boolean = false;
  currentUrl:any;
  filteredItems:Array<any> = [];
  @ViewChild('item') item:ElementRef;

  ngOnInit(): void {
    this.getAllItems();
    this.display = false;
  }

  public getAllItems(){
    this.itemHttp.Read().subscribe(response => {
      this.items = response;
      this.items.forEach(item => {
        this.filteredItems.push(item);
      });
    })
  }

  updateItemClick(){
    this.display = true;
  }

  deleteItem(){
   console.log((this.item.nativeElement as HTMLDivElement).className.split(' ', 1));
  }
}
