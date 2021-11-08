import { Component, OnInit } from '@angular/core';
import { Globals } from '../Global';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  gl = Globals;

  constructor() { }

  ngOnInit(): void {
    
  }
}
