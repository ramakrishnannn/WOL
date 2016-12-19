import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'login.component.html',
     styleUrls: ['login.css']
})

export class LoginComponent  {
    model: any = {};
    loading = false;
    returnUrl: string;



    login() {/*
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
           window.location.href = '/home';
    }
}
