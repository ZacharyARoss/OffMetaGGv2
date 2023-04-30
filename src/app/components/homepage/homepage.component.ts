import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public showLoginPage:boolean = false;
  public roles:string[]=['Top', 'Jungle', 'Mid', 'Marksman', 'Support'];
  public currentRole:string='';
  goToLoginPage(){
    this.showLoginPage = !this.showLoginPage;
  }
  navigateToRole(roleName:string){
    this.currentRole = roleName;
  }
}
