import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSignComponent } from './view/user-sign/user-sign.component';
import { UserSignInComponent } from './view/user-sign/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './view/user-sign/user-sign-up/user-sign-up.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { AccountProxyService } from './services/account-proxy.service';
import { AdminAuthGuard, AuthGuard } from './auth.guard';
import { AdminPageComponent } from './view/admin-page/admin-page.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { ItemProxyService } from './services/item-proxy.service';
import { PhotoProxyService } from './services/photo-proxy.service';
import { UploadPhotoModalComponent } from './view/user-profile/upload-photo-modal/upload-photo-modal.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { SettingsModalComponent } from './view/user-profile/settings-modal/settings-modal.component';
import { AdminAddComponent } from './view/admin-page/admin-add/admin-add.component';
import { AdminUpdateComponent } from './view/admin-page/admin-update/admin-update.component';



@NgModule({
  declarations: [
    AppComponent,
    UserSignComponent,
    UserSignInComponent,
    UserSignUpComponent,
    MainPageComponent,
    AdminPageComponent,
    UserProfileComponent,
    UploadPhotoModalComponent,
    EditProfileComponent,
    SettingsModalComponent,
    AdminAddComponent,
    AdminUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AccountProxyService, 
    ItemProxyService, 
    PhotoProxyService, 
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
