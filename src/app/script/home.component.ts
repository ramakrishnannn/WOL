import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: '../html/home.component.html',
  styleUrls: ['../css/home.component.css']
  
})
export class HomeComponent implements OnInit {

  	public data;
    public filterQuery = "";
    public rowsOnPage = 2;
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


}
