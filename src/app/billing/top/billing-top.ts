import { Component, OnInit, Input } from '@angular/core';
import {Http} from "@angular/http";
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'billing-top',
  templateUrl: 'billing-top.html',
  styleUrls: ['billing-top.css']
})
export class BillingTopComponent {

  public invoiceData;
  model: any = {};
	dateval:string
    param: string;


    constructor(private http: Http) {
    this.getCurrentMonthBilling();
    }
  
getCurrentMonthBilling(){
this.http.get('http://192.168.26.15:8080/invoice/currectinvoice')
      .subscribe(
        data => { this.invoiceData = data.json()
          this.model.monthvalue=this.invoiceData[0].month+"-"+this.invoiceData[0].year;
        },
        err => console.error(err),
        () => console.log('done')
      );
}

 getBillingDetails(monthVal){


	if (monthVal.length > 5) {

		var res = monthVal.split("-");
		var obj = { 
            monthName: res[0],
            monthId: new Date(monthVal+'-1-01').getMonth()+1+"",
            year: res[1]+""
        }; 
	    var jsonString= JSON.stringify(obj);

      this.http.post('http://192.168.26.15:8080/invoice/billingdetails',jsonString)
      .subscribe(
        data => { this.invoiceData = data.json()},
        err => console.error(err),
        () => console.log(this.invoiceData)
      );

	}

  document.getElementById("dtp").blur;

 }
}