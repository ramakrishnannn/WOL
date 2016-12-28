import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
import { TroubleticketsService } from './troubletickets.service';
import { Troubleticket } from './troubleticket.interface';
import { Http,Response } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'app-troubletickets',
  templateUrl: 'troubletickets.component.html',
  styleUrls: ['troubletickets.component.css']
})
export class TroubleticketsComponent {
  userForm: any;

  ngOnInit() {
this.setcookie();
}
  private troubleticketsService: TroubleticketsService;

  constructor(private _cookieService:CookieService,private formBuilder: FormBuilder,protected http: Http,private router: Router) {


    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
       'phone': ['', Validators.required],
       'category': ['', Validators.required],
      'description': ['', [Validators.required, Validators.minLength(10)]]
    });
  }

 top: boolean = false;
   setcookie(){

   if(this._cookieService.get('menu') == 'top'){
     this.top = true;
   }

 };

submitForm(myForm) {
 if (!this.userForm.valid) {
      return '/home';
  }
  var result;
  if (this.userForm.dirty && this.userForm.valid) {
    result = this.addTickets(JSON.stringify(myForm.value));
    if(result!="error"){
   this.router.navigate(['./viewticket']);
    }
}
 }


  addTickets(formData){
    this.http.post('http://192.168.26.15:8080/tickets/create',formData)
        .map(res => res.json())
        .subscribe(
          (data) => {
            this.userForm.email = data.id;
          },
          (response: Response) => {
            this.handleError(response);
            return "error";
          }
        );
        return "success";
  }


    /**
   * Handle errors
   * @param response
   */
  handleError(response: Response) {
    if (response.status === 422) {
      let errors : Object = response.json();
      console.log(errors);
      for (var field in errors) {
        var fieldErrors: string[] = (<any>errors)[field];

      }
    }

    console.log(response);
  }

  saveUser() {

    console.log(this.userForm);
    if (!this.userForm.valid) {
      return '/home';
    }
    console.log(this.userForm.value);



  alert(this.userForm.value);


  alert(this.userForm);

   var result,
        userValue = this.userForm.value;

    alert(userValue);

  }
}
