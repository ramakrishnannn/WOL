import { Component, Input } from '@angular/core';


@Component({
  selector: 'payment-top',
   templateUrl: 'payment-top.html',
    styleUrls: ['payment-top.css'],

})
export class PaymentTopComponent {

 step1: true;
 isquickpay: false;
 step3: false;
 step4: false;

  constructor() {

  }

  onSelect() {
  	alert("hi");
 //isquickpay: true;

  }
}