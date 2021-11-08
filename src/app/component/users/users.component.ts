import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../Global';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  gl = Globals;
  users:[] = [];
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    let url =  this.gl.url+"/getAllUsers";
    this.http.get<any>(url).subscribe(data => {
      this.users = Object(data)['result'];
      console.log(this.users);
      console.log(Object(data));
  });
  
  }
  view(user:string){
    this.router.navigateByUrl("/mypost?usr="+user);
  }
  deleteUsr(user:string){
    if(user!=this.gl.userData.username){
      let answer = confirm("¿Seguro que deseas eliminar a este usuario?");
      if(answer){
        for(let i in this.users){
          if(Object(this.users)[i]['username']==user){
              console.log(Object(this.users)[i])
              Object(this.users).splice(i,1);
              
              break;
          }
        }
        let url =  this.gl.url+"/removeUser?user="+user;
        this.http.get<any>(url).subscribe(data =>{
            if(Object(data)['result']){
                alert('Usuario eliminado')
            }
        });
      }
    }else{
      alert("¡Esta acción esta bloqueada por el programador!")
    }
  }
  edit(user:string){
    this.router.navigateByUrl("/profile?usr="+user);
  }

}
