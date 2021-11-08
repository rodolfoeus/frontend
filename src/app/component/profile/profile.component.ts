import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../Global';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  gl = Globals;
  ud = userData;
  isMyProfile = false;
  nameOld:string = "";
  
 
  errorPass = false;
  errorUser = false;
  constructor(private http: HttpClient,private router: Router,private activateRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
   
    let usrname;
    this.activateRoute.queryParams.subscribe(params => {
      const usr: any = params['usr'] || null;
        if (usr!=null) {
          usrname = usr
        }else{
          usrname = this.gl.userData.username
          this.isMyProfile =true;
        }
    });
      let url =  this.gl.url+"/getUser?user="+usrname;
      this.http.get(url).subscribe(data => {
        this.ud = Object(data)["result"];
        this.nameOld= Object(data)["result"]['username'];
    });
  }
  logout(){
      this.gl.isLogin = false;
      this.router.navigateByUrl("/home");
  }
  registerUser(form: NgForm) {
    let url =  this.gl.url+"/updatUser?oldUser="+this.nameOld;
    
    this.http.post<any>(url, form.value).subscribe(data => {
          if (Object(data)['result']) {
              alert("Se ha actualizado el usuario");
          }else{
              alert("Ocurrio un problema");
          }
    });
  }
}
export let userData = {
    name: "none",
    username: "usr",
    gender: "none",
    email: "none",
    password: "none",
    rol: "admin"
  
}
