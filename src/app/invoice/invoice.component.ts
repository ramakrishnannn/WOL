import {Component , OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {CookieService} from 'angular2-cookie/core';
@Component({
    selector: 'invoice',
    templateUrl: 'invoice.component.html',
    styleUrls: ['invoice.component.css']
})
export class InvoiceComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "getMonthVal(month)";
    public sortOrder = "desc";

    constructor(private http: Http,private _cookieService:CookieService) {
    }

    ngOnInit(): void {
        this.http.get("http://192.168.26.15:8080/invoice/all")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });

            this.setcookie();
    }
top: boolean = false;
   setcookie(){

   if(this._cookieService.get('menu') == 'top'){
     this.top = true;
   }

 };
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.month.length;
    }

     public getMonthVal = (a: any) => {
        return new Date(a.month+'-1-'+a.year).getMonth()+1;
    }


}
