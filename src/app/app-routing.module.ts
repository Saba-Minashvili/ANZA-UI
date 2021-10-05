import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignComponent } from './view/user-sign/user-sign.component';
import { UserSignInComponent } from './view/user-sign/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './view/user-sign/user-sign-up/user-sign-up.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { AdminPageComponent } from './view/admin-page/admin-page.component';
import { AdminAuthGuard, AuthGuard } from './auth.guard';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { AdminAddComponent } from './view/admin-page/admin-add/admin-add.component';


const routes: Routes = [
  {path:'', component:MainPageComponent, pathMatch:'full'},
  {path:'user-sign', component:UserSignComponent, children:[
    {path:'in', component:UserSignInComponent},
    {path:'up', component:UserSignUpComponent},
  ]},
  {path:'admin', component:AdminPageComponent, canActivate:[AdminAuthGuard], children:[
    {path:'add', component:AdminAddComponent, canActivateChild:[AdminAuthGuard] },
  ]},
  {path:'profile', component:UserProfileComponent, canActivate:[AuthGuard], children:[
    {path:'edit', component:EditProfileComponent, canActivateChild:[AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
