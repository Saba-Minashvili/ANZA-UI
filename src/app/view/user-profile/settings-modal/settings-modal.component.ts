import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css']
})
export class SettingsModalComponent implements OnInit {

  constructor(private router:Router) { }
  @ViewChild('closeWindowBtn') closeWindowBtn:ElementRef;

  ngOnInit(): void {
  }

  onLogOutBtnClick() {
    (this.closeWindowBtn.nativeElement as HTMLDivElement).click();
    localStorage.clear();
    this.router.navigate(['']);
  }
}
