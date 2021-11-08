import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../Global';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  gl = Globals;
  activated: boolean = false;
  isLogin: boolean = false;
  constructor(private http: HttpClient,private router: Router) {
      if(this.gl.isLogin){
          this.router.navigateByUrl("/home");
      }
   }
  
  validateUser(user:string,pass:string){
    let url = "http://localhost:5000/validateUser";
    url = url +"?user="+user+"&pass="+pass;
    this.http.get(url).subscribe(data => {
              if(!Object(data)["result"]){
                  this.activated = true;
              }else{
                  alert("Bienvenido "+user);
                  Globals.isLogin = true;
                  Globals.userData = Object(data)["userData"];
                  this.router.navigateByUrl("/home");
              }
        })
    
    return false;
  }

}
