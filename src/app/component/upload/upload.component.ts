import { Component, OnInit } from '@angular/core';
import { Globals } from '../Global';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent{
  gl = Globals;
  sendData:any = null;
 
  constructor(private http: HttpClient,private router: Router) { }

  upload(form: NgForm){
    let url =  this.gl.url+"/loadData";
    url = url+"?type="+form.value['type'];
    alert(url)
    this.sendData=localStorage.getItem('data');
    this.http.post(url,{'data':this.sendData}).subscribe(data => {
        form.resetForm();
    });
  }
  onFileSelected(event:any){
    const file:File = event.target.files[0];
    let reader = new FileReader();
   
    reader.readAsText(file);
    reader.onload = function(e) {
      localStorage.setItem('data', JSON.stringify(reader.result));
    };
    reader.onerror = function() {
      console.log(reader.error);
    };
  }

  
}
