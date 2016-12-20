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

    constructor(private route: ActivatedRoute,private http: Http,private router:Router) {
        
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

      this.http.post('http://localhost:8080/invoice/billingdetails',jsonString)
      .subscribe(
        data => { this.invoiceData = data.json()},
        err => console.error(err),
        () => console.log(this.invoiceData)
      );
	}

 }
}