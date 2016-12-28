
import { Component, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
@Component({
  selector: 'side-bar',
   templateUrl: 'app.sidebar.html',
    styleUrls: ['app.sidebar.css'],
providers: [CookieService]
})
export class SideBarLeftComponent {
isClassVisible: false;
issubmenu:false;
 top: boolean = false;
ngOnInit() {
this.gotoHome();
}
  constructor(private router: Router,private _cookieService:CookieService) {

  }
  clicked() {
this._cookieService.put('menu','top');
 location.reload();
  }
   	gotoHeroes() {
   		window.location.href = '/billing';
  
}
     gotoHome() {
$('.carousel').carousel({
  interval: 2000
})
  
}

}