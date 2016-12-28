import { Component, Input } from '@angular/core';


@Component({
  selector: 'profile-top',
    templateUrl: 'profile-top.html',
    styleUrls: ['profile-top.css']
  
})

export class ProfileTopComponent {
         gotoHome() {
       window.location.href = '/home';
  
}
}