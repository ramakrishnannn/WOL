import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'billing-left',
  templateUrl: 'billing-left.html',
  styleUrls: ['billing-left.css']
})
export class BillingLeftComponent {

  dateval: string;
  public invoiceData;
  model: any = {};

constructor(private http: Http) {
    this.getCurrentMonthBilling();
    }


getCurrentMonthBilling(){
this.http.get('http://localhost:8080/invoice/currectinvoice')
      .subscribe(
        data => { this.invoiceData = data.json()
          this.model.monthvalue=this.invoiceData[0].month+"-"+this.invoiceData[0].year;
        },
        err => console.error(err),
        () => console.log('done')
      );
}


  getBillingDetails(monthVal) {

    if (monthVal.length > 5) {

      let res = monthVal.split("-");
      let obj = {
        monthName: res[0],
        monthId: new Date(monthVal + '-1-01').getMonth() + 1 + "",
        year: res[1] + ""
      };
      let jsonString = JSON.stringify(obj);

      this.http.post('http://localhost:8080/invoice/billingdetails', jsonString)
        .subscribe(
          data => {
            this.invoiceData = data.json()
          },
          err => console.error(err),
          () => console.log(this.invoiceData)
        );
    }

  }
}
