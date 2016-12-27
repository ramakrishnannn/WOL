import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";


@Component({
    selector: 'dashboard-left',
    templateUrl: 'dashboard-left.html',
     styleUrls: ['dashboard-left.css'],
})

export class DashboardLeft implements OnInit {

  	public ticketData;
  	public invoiceData;
  	public invoiceDueData;
    public filterQuery = "";
    public rowsOnPage = 2;
    public sortBy = "name";
    public sortOrder = "desc";

     constructor(private http: Http) {
    }



ngOnInit() {
 this.getAllTickets();
this.getInvoiceData();
this.getInvoiceDueAmount();
}

  getAllTickets() {
    this.http.get('http://192.168.26.15:8080/tickets/lasttwo')
      .subscribe(
        data => { this.ticketData = data.json()},
        err => console.error(err),
        () => console.log('done')
      );
  }


  getInvoiceData() {
    this.http.get('http://192.168.26.15:8080/invoice/last2Month')
      .subscribe(
        data => { this.invoiceData = data.json()},
        err => console.error(err),
        () => console.log('done')
      );
  }

  getInvoiceDueAmount(){
    this.http.get('http://192.168.26.15:8080/invoice/currectinvoice')
      .subscribe(
        data => { this.invoiceDueData = data.json()},
        err => console.error(err),
        () => console.log('done')
      );
  }

}