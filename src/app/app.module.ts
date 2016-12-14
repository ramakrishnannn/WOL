import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './script/app.component';
import { NavBarComponent } from './script/nav-bar.component';
import { SideBarComponent } from './script/sidebar.component';
import { DashboardComponent } from './script/dashboard.component';
import { AboutComponent } from './script/about';
import { profileComponent } from './script/profile';
import { MakePaymentComponent } from './script/app.makepayment.component';
import { ContactComponent } from './script/contact';
import { CheckComponent } from './script/check';
import { CardComponent } from './script/card';
import { QuickpayComponent } from './script/quickpay';
/**/
import { HttpModule } from "@angular/http";
import { DataTableModule } from "angular2-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFilterPipe }   from './script/data-filter.pipe';

import { InvoiceComponent } from './script/invoice.component';
import { TroubleticketsComponent } from './script/troubletickets.component';
import { ControlMessagesComponent } from './script/control-messages.component';
import { PaymenthistoryComponent } from './script/paymenthistory.component';
import { HomeComponent } from './script/home.component';
import { BillingComponent } from './script/billing.component';
import { ViewticketComponent } from './script/viewticket.component';

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
    path: 'paymenthistory',
    component: PaymenthistoryComponent
  },
   {
    path: 'quick',
    component: QuickpayComponent
  },
   {
    path: 'card',
    component: CardComponent
  },
   {
    path: 'check',
    component: CheckComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
    {
    path: 'contact',
    component: ContactComponent
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
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'billing',
    component: BillingComponent
  },
   {
    path: 'viewticket',
    component: ViewticketComponent
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  {
  path: './billing',
  redirectTo: '/billing',
  pathMatch: 'full'
}
])
  ],
  declarations: [
    AppComponent,
    QuickpayComponent,
    CardComponent,
    CheckComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
     AboutComponent,
     profileComponent,
     MakePaymentComponent,
	 InvoiceComponent,
    DataFilterPipe,
    TroubleticketsComponent,
    ControlMessagesComponent,
    ContactComponent,
    PaymenthistoryComponent,
    HomeComponent,
    BillingComponent,
        ViewticketComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/