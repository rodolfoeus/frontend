import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { MisionComponent } from './component/mision/mision.component';
import { VisionComponent } from './component/vision/vision.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MoreComponent } from './component/more/more.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopostComponent } from './component/topost/topost.component';
import { MypostComponent } from './component/mypost/mypost.component';
import { UploadComponent } from './component/upload/upload.component';
import { UsersComponent } from './component/users/users.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MisionComponent,
    VisionComponent,
    AboutComponent,
    ContactComponent,
    MoreComponent,
    LoginComponent,
    RegisterComponent,
    TopostComponent,
    MypostComponent,
    UploadComponent,
    UsersComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
