import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
@Component({
  selector: 'app-home',
  templateUrl: '../html/home.component.html',
  styleUrls: ['../css/home.component.css']
  
})
export class HomeComponent implements OnInit {
  	public ticketData;
  	public invoiceData;
  	public invoiceDueData;
    public filterQuery = "";
    public rowsOnPage = 2;
    public sortBy = "name";
    public sortOrder = "desc";
isClassVisible: false;
issubmenu:false;


       gotoHeroes() {
       window.location.href = '/billing';
  
}

    constructor(private http: Http,private router: Router,private _cookieService:CookieService) {
    }

 top: boolean = false;
 setcookie(){
   
   if(this._cookieService.get('menu') == 'top'){
     this.top = true;
   }

 };


ngOnInit() {
 this.getAllTickets();
this.getInvoiceData();
this.getInvoiceDueAmount();
this.setcookie();
}
  getAllTickets() {
    this.http.get('http://192.168.26.60:8080/tickets/lasttwo')
      .subscribe(
        data => { this.ticketData = data.json()},
        err => console.error(err),
        () => console.log('done')
      );
  }


  getInvoiceData() {
    this.http.get('http://192.168.26.60:8080/invoice/last2Month')
      .subscribe(
        data => { this.invoiceData = data.json()},
        err => console.error(err),
        () => console.log('done')
      );
  }

  getInvoiceDueAmount(){
    this.http.get('http://192.168.26.60:8080/invoice/currectinvoice')
      .subscribe(
        data => { this.invoiceDueData = data.json()},
        err => console.error(err),
        () => console.log('done')
      );
  }

}
