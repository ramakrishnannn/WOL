import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NavBarComponent } from './nav-bar.component';
import { SideBarComponent } from './sidebar.component';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
    DashboardComponent


  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/