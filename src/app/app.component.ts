import { Component } from '@angular/core';
import { Globals } from './component/Global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    gl = Globals;
}
