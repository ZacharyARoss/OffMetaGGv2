//imported by angular by default
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imported by us
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OffmetarecommendationComponent } from './components/offmetarecommendation/offmetarecommendation.component';
import { SignupComponent } from './components/signup/signup.component';
import { RoutingModule } from './app.routing';
import { BaseComponent } from './components/base/base.component';
import { HttpClientModule } from '@angular/common/http'; //oh but why didnt angular import this one... beccause its not a default
import { ChampionCardComponent } from './components/champion-card/champion-card.component';

//angular module that will be run at the start of the application
@NgModule({
  //declaring exports that exist
  declarations: [
    HomepageComponent,
    LoginComponent,
    OffmetarecommendationComponent,
    SignupComponent,
    BaseComponent,
    ChampionCardComponent
  ],
  //imports can only work if they are being exported
  imports: [
    BrowserModule, 
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
