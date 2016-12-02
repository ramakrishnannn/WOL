
import { Component, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'side-bar',
   templateUrl: '../html/app.sidebar.html',
    styleUrls: ['../css/app.sidebar.css'],

})
export class SideBarComponent {
isClassVisible: false;
issubmenu:false;
  
  constructor() {
  }

 
}