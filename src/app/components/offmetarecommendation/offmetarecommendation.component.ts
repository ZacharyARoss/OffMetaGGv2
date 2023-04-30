import { Component, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IChamptionData } from 'src/app/core/interfaces';
import { StatsService } from 'src/app/core/services/stats.service';


@Component({
  selector: 'app-offmetarecommendation',
  templateUrl: './offmetarecommendation.component.html',
  styleUrls: ['./offmetarecommendation.component.scss']
})
export class OffmetarecommendationComponent {
public role:string | null | undefined;
public championList:IChamptionData[] | undefined;
public apiListener:Subscription | undefined;
public urlSubscription:Subscription | undefined;
constructor(public router:Router, public activatedRoute: ActivatedRoute, public statsService:StatsService){}
ngOnInit(){
this.urlSubscription = this.router.events.subscribe((event) => {this.role = this.activatedRoute.snapshot.paramMap.get('role');});
if (this.statsService.apiStats) {
  this.championList = this.statsService.apiStats;
} else {
  this.apiListener = this.statsService.apiObservable?.subscribe((data:IChamptionData[]) => {this.championList=data});
}
}
ngOnDestroy(){ //garbage collection
  this.apiListener?.unsubscribe();
  this.urlSubscription?.unsubscribe();
}
}
