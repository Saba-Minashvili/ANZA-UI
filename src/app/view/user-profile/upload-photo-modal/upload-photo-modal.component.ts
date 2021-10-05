import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhotoProxyService } from 'src/app/services/photo-proxy.service';

@Component({
  selector: 'app-upload-photo-modal',
  templateUrl: './upload-photo-modal.component.html',
  styleUrls: ['./upload-photo-modal.component.css']
})
export class UploadPhotoModalComponent implements OnInit {

  @ViewChild('uploadFileInp') uploadFileInp:ElementRef;
  @ViewChild('closeWindowBtn') closeWindowBtn:ElementRef;
  @ViewChild('profilePhoto') profilePhoto:ElementRef;
  @Output() photoUploaded: EventEmitter<string> = new EventEmitter<string>();
  userPhoto:any;
  imageUrl:string = "/assets/default-user-image.png"
  fileToUpload:any = null;
  accountId:any = localStorage.getItem('id');
  constructor(private photoHttp:PhotoProxyService) {}

  ngOnInit(): void {
   
  }

  selectPhotoHandler(event:any){
    this.fileToUpload = event.target.files[0];

    var reader = new FileReader();
    reader.onload = (res:any) => {
      this.imageUrl = res.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  uploadPhoto(){
    var obj:any = {
      accountId:this.accountId,
      fileName:this.fileToUpload
    }
    this.photoHttp.UploadAccountPhoto(obj).subscribe(response => {
      console.log(response);
    })
  }

  removePhoto(){
    this.imageUrl = "/assets/default-user-image.png";
  }

  closeWindow(){
    (this.closeWindowBtn.nativeElement as HTMLDivElement).click();
    this.imageUrl = "/assets/default-user-image.png";
  }
}
