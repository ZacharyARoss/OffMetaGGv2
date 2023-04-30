import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OffmetarecommendationComponent } from './components/offmetarecommendation/offmetarecommendation.component';
import { SignupComponent } from './components/signup/signup.component';
import { RoutingModule } from './app.routing';
import { BaseComponent } from './components/base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    OffmetarecommendationComponent,
    SignupComponent,
    BaseComponent,
    ChampionCardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
