import { Component, Input } from '@angular/core';
import { IChamptionData } from 'src/app/core/interfaces';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss']
})
export class ChampionCardComponent {
@Input() champion:IChamptionData={} as IChamptionData;
formatWinPercentage(win:number, play:number):number{
  return Math.floor((win/play)*100);
}
formatPickRate(pick_rate:number):number{
  return Math.floor(pick_rate*100);
}
}
