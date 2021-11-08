import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Globals } from '../Global';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  gl = Globals;
  images:[] = [];
  videos:[] = [];

  constructor(private http: HttpClient, private router: ActivatedRoute,private _sanitizer: DomSanitizer
    ) { }
  ngOnInit(): void {
    let usrname;
    this.router.queryParams.subscribe(params => {
      const usr: any = params['usr'] || null;
        if (usr!=null) {
          usrname = usr
        }else{
          usrname = this.gl.userData.username
        }
    });
    let url =  this.gl.url+"/getMyPublications?username="+usrname;
    this.http.get<any>(url).subscribe(data => {
      this.images = JSON.parse(JSON.stringify(Object(data)["images"]));
      this.videos = JSON.parse(JSON.stringify(Object(data)["videos"]));
  });
  }
  getVideoIframe(url:string) {
    var video, results;
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

  checkIfLike(users:object){
    let like = false;
    for(let i in users){
      if(Object(users)[i]==this.gl.userData.username){
        like = true
        break;
      }
    }
    return like;
  }
  addLike(id:string,type:string){
    let url =  this.gl.url+"addLike?";
    url = url +"id="+id+"&";
    url = url +"user="+this.gl.userData.username+"&";
    url = url +"type="+type;
    if(type=="images"){
      Object(this.images)[id]['users'].push(this.gl.userData.username);
      Object(this.images)[id]['likes']=Object(this.images)[id]['likes']+1;
    }else{
      Object(this.videos)[id]['users'].push(this.gl.userData.username);
      Object(this.videos)[id]['likes']=Object(this.videos)[id]['likes']+1;
    }
    
      this.http.get(url).subscribe(data => {
        console.log("result:")
          console.log(Object(data))
      });
      
  }
  removeLike(id:string,type:string){
    let url =  this.gl.url+"/removeLike?";
    url = url +"id="+id+"&";
    url = url +"user="+this.gl.userData.username+"&";
    url = url +"type="+type;
    if(type=="images"){
      Object(this.images)[id]['users'].pop(this.gl.userData.username);
      Object(this.images)[id]['likes']=Object(this.images)[id]['likes']-1;
    }else{
      Object(this.videos)[id]['users'].pop(this.gl.userData.username);
      Object(this.videos)[id]['likes']=Object(this.videos)[id]['likes']-1;
    }
      this.http.get(url).subscribe(data => {
        console.log("result:")
          console.log(Object(data))
      });
}
}
