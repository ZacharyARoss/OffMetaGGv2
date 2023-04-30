import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OffmetarecommendationComponent } from './components/offmetarecommendation/offmetarecommendation.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
    {path: '.', component: HomepageComponent, pathMatch: 'full'}, //pathMatch means that the path has to be exactly this variable.
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignupComponent}, //notice here no pathMatch full. so "signup/insert-anything" would still route back to sign up
    {path: 'role/:role', component: OffmetarecommendationComponent},
    {path: 'top', redirectTo: 'role/top', pathMatch: 'full'},
    {path: 'jungle', redirectTo: 'role/jungle', pathMatch: 'full'},
    {path: 'mid', redirectTo: 'role/mid', pathMatch: 'full'},
    {path: 'marksman', redirectTo: 'role/marksman', pathMatch: 'full'},
    {path: 'support', redirectTo: 'role/support', pathMatch: 'full'},
    {path: '**', redirectTo: '.', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)  // passing in our routes variable so angular can iterate over the array
  ],
exports: [RouterModule]
})
export class RoutingModule {} 