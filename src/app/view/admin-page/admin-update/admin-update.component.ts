import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemProxyService } from 'src/app/services/item-proxy.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  constructor(private itemHttp:ItemProxyService) { }
  @Output() currentItem = new EventEmitter();
  itemId:any;
  

  ngOnInit(): void {
    this.currentItem.emit(this.itemId);
    this.getChosenItem();
  }


  getChosenItem(){
    console.log(this.itemId);
  }
}
