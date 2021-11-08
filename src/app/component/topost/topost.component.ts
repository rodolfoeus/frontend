import { Component, OnInit } from '@angular/core';
import { Globals } from '../Global';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topost',
  templateUrl: './topost.component.html',
  styleUrls: ['./topost.component.css']
})
export class TopostComponent implements OnInit {
  gl = Globals;
  
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  postPublication(form: NgForm){
      form.value['user']=this.gl.userData.username;
      let url =  this.gl.url+"/addPublication";
      url = url + "?typeOfP="+form.value['type'];
      delete form.value['type'];
      console.log(form.value);
      const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
      this.http.post<any>(url, form.value, { headers }).subscribe(data => {
            alert("agreagado")
      });
      form.resetForm();
  }
}
