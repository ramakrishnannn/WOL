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

  public paymentTableData = [
  {
    "mode": "Credit Card Payments",
    "paidDate": "04/04/2016",
    "paidAmount": 100.00
  },
  {
    "mode": "NEFT",
    "paidDate": "02/01/2016",
    "paidAmount": 80
  },
  {
    "mode": "ACH Payments",
    "paidDate": "03/07/2016",
    "paidAmount": 100
  },
  {
    "mode": "Credit Card Payments",
    "paidDate": "06/06/2016",
    "paidAmount": 50
  },
  {
    "mode": "ACH Payments",
    "paidDate": "07/04/2016",
    "paidAmount": 100
  },
  {
    "mode": "Credit Card Payments",
    "paidDate": "08/01/2016",
    "paidAmount": 50
  }
];

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.data = this.paymentTableData;
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


export class SmartTablesService {


}
