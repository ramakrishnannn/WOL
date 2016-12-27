import {Component , OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {CookieService} from 'angular2-cookie/core';

@Component({
    selector: 'app-viewticket',
    templateUrl: 'viewticket.component.html',
    styleUrls: ['viewticket.component.css']

})
export class ViewticketComponent implements OnInit {
 	
 	public data;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "name";
    public sortOrder = "desc";

   constructor(private http: Http,private _cookieService:CookieService) {
    }

    ngOnInit(): void {
        this.http.get("http://192.168.26.15:8080/tickets/all")
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
        return a.name.length;
    }

    

}