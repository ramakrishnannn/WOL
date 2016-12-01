import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NavBarComponent } from './nav-bar.component';
import { SideBarComponent } from './sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about';
import { profileComponent } from './profile';
import { MakePaymentComponent } from './app.makepayment.component';


/**/
import { HttpModule } from "@angular/http";
import { DataTableModule } from "angular2-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFilterPipe }   from './invoice/data-filter.pipe';

import { InvoiceComponent } from './invoice/invoice.component';
import { TroubleticketsComponent } from './troubletickets/troubletickets.component';
import { ControlMessagesComponent } from './troubletickets/control-messages.component';
/**/
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule, 
    HttpModule,
    RouterModule.forRoot([
       {
    path: 'profile',
    component: profileComponent
  },
  {
    path: 'heroes',
    component: HeroDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'payment',
    component: MakePaymentComponent
  },
  {
    path: 'about',
    component:AboutComponent

  },
    {
    path: 'viewinvoice',
    component: InvoiceComponent
  },
   {
    path: 'createtroubleticket',
    component: TroubleticketsComponent
  },
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
     AboutComponent,
     profileComponent,
     MakePaymentComponent,
	 InvoiceComponent,
    DataFilterPipe,
    TroubleticketsComponent,
    ControlMessagesComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/