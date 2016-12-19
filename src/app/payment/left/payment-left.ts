import { Component, Input } from '@angular/core';


@Component({
  selector: 'payment-left',
   templateUrl: 'payment-left.html',
    styleUrls: ['payment-left.css'],

})
export class PaymentLeftComponent {

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