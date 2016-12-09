import {Component , OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-viewticket',
  templateUrl: '../html/viewticket.component.html',
  styleUrls: ['../css/viewticket.component.css']
})
export class ViewticketComponent implements OnInit {
 	
 	public data;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "name";
    public sortOrder = "desc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("http://192.168.26.60:8080/tickets/all")
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
        return a.name.length;
    }

    

}