import { Component, Input } from '@angular/core';


@Component({
  selector: 'makepayment',
   templateUrl: '../html/app.payment.html',
    styleUrls: ['../css/payment.css'],

})
export class MakePaymentComponent {

 step1: true;
 isquickpay: false;
 step3: false;
 step4: false;

  constructor() {

  }

  onSelect() {
  	alert("hi");
 isquickpay: true;

  }
}