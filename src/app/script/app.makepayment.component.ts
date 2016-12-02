import { Component, Input } from '@angular/core';


@Component({
  selector: 'makepayment',
   templateUrl: '../html/app.payment.html',
    styleUrls: ['../css/payment.css'],

})
export class MakePaymentComponent {

 isquickpay:false;
 iscard:false;
 ischeck:false;
 isonline:false;
}