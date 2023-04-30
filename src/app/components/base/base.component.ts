import { Component } from '@angular/core';
import { StatsService } from 'src/app/core/services/stats.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
public roles:string[]=['Top', 'Jungle', 'Mid', 'Marksman', 'Support'];
constructor(public statisticsService:StatsService){
  this.statisticsService.getStatistics();
}
}
