import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { MisionComponent } from './component/mision/mision.component';
import { VisionComponent } from './component/vision/vision.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MoreComponent } from './component/more/more.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MypostComponent } from './component/mypost/mypost.component';
import { TopostComponent } from './component/topost/topost.component';
import { UploadComponent } from './component/upload/upload.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'mision', component: MisionComponent},
  { path: 'vision', component: VisionComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'more', component: MoreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'mypost', component: MypostComponent},
  { path: 'topost', component: TopostComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
