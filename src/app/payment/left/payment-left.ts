import { Component, Input } from '@angular/core';
import {Http} from "@angular/http";

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
 public invoiceData;
  model: any = {};

  constructor(private http: Http) {
    }

  onSelect() {
  	alert("hi");
 //isquickpay: true;

  }

  getPaymentDetails(){

  	 this.http.get('http://192.168.26.60:8080/invoice/currectinvoice')
      .subscribe(
        data => { this.invoiceData = data.json()  
        this.model.id=this.invoiceData[0].id;
        this.model.payamount=this.invoiceData[0].amount;
        },
        err => console.error(err),
        () => console.log('done')
      );

      

  }

  paybill(){
     var obj = { 
            billId: this.model.id+"",
            paidAmount: this.model.payamount+"",
        }; 
	    var jsonString= JSON.stringify(obj);

       this.http.post('http://192.168.26.60:8080/invoice/update',jsonString)
      .subscribe(
        data => { this.invoiceData = data.json()},
        err => console.error(err),
        () => console.log(this.invoiceData)
      );
  }
}