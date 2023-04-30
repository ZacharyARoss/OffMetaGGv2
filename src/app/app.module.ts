import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OffmetarecommendationComponent } from './components/offmetarecommendation/offmetarecommendation.component';
import { SignupComponent } from './components/signup/signup.component';
import { RoutingModule } from './app.routing';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    OffmetarecommendationComponent,
    SignupComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
