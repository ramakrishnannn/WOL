import {Component , OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-paymenthistory',
  templateUrl: '../html/paymenthistory.component.html',
  styleUrls: ['../css/paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "paidDate";
    public sortOrder = "desc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
       /* this.http.get("./payment_data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });*/
            
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.month.length;
    }

     public getMonthVal = (a: any) => {
        return new Date(a.month+'-1-01').getMonth()+1;
    }
  
    
}