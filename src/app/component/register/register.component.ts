import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../Global';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  gl = Globals;
  errorPass = false;
  errorUser = false;
 
  constructor(private http: HttpClient,private router: Router) {
      if(this.gl.isLogin){
          this.router.navigateByUrl("/home");
      }
   }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    let url = "http://localhost:5000/registerUser";
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    this.http.post<any>(url, form.value, { headers }).subscribe(data => {
        if(!Object(data)["register"]){
            this.errorPass = Object(data)["password"];
            this.errorUser = Object(data)["user"];
        }else{
            alert("Se ha registrado correctamente, sera redirigido para que pueda iniciar sesión");
            this.router.navigateByUrl("/login");
        }
    });
  
    
  }
  

}
