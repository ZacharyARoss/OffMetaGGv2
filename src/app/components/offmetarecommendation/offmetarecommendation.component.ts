import { Component, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-offmetarecommendation',
  templateUrl: './offmetarecommendation.component.html',
  styleUrls: ['./offmetarecommendation.component.scss']
})
export class OffmetarecommendationComponent {
public role:string | null | undefined;
constructor(public router:Router, public activatedRoute: ActivatedRoute){}
ngOnInit(){
this.role = this.activatedRoute.snapshot.paramMap.get('role');
}
}
