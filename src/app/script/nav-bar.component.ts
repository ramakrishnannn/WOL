import { Component, Input } from '@angular/core';


@Component({
  selector: 'nav-bar',
   templateUrl: '../html/app.navbar.html',
    styleUrls: ['../css/app.navbar.css']
})
export class NavBarComponent {
isClassVisible: false;
  
  constructor() {
  }

}
