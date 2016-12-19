import { Component, Input } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'contact-bar',
    templateUrl: 'contact.html',
    styleUrls: ['contact.css']
  
})

export class ContactComponent {
  
ngOnInit() {
this.setcookie();
}
    constructor(private _cookieService:CookieService) {
    }
     top: boolean = false;
   setcookie(){
   
   if(this._cookieService.get('menu') == 'top'){
     this.top = true;
   }

 };
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/