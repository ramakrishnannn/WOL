import {Component , OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector: 'my-app',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "month";
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("http://192.168.26.60:8080/invoice/all")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
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