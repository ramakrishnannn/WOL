import { Component, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'side-bar-top',
   templateUrl: 'sidebartop.html',
    styleUrls: ['sidebartop.css'],
    providers: [CookieService]

})
export class SideBarTopComponent {
isClassVisible: false;
issubmenu:false;
 top: boolean = false;

  constructor(private router: Router,private _cookieService:CookieService) {

  }
  
  clicked() {
this._cookieService.put('menu','left');
location.reload();
  }

   	gotoHeroes() {
   		window.location.href = '/billing';
  
}

     gotoHome() {
       window.location.href = '/home';
  
}

}