import { Injectable } from '@angular/core';
import { IChamptionData } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
public apiStats:IChamptionData[] | undefined;
public apiObservable:Observable<IChamptionData[]> | undefined;
  constructor(public http:HttpClient) {}
public getStatistics():Observable<IChamptionData[]>{
  this.apiObservable = of([{champion_id:64,
    play:189277,
    win:91747,
    lose:97530,
    kill:1314986,
    death:1016542,
    assist:1523783,
    cs:5846540,
    neutral_cs:21553390,
    gold:2055170498,
    pick_rate:0.3092,
    ban_rate:0.33489090238408004,
    ward:1226140,
    champion_name:"Lee Sin",
    role: "jungle",
    image_url:"https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png"}]).pipe(tap((apiResponse:IChamptionData[]) => {this.apiStats=apiResponse}));
  //this.http.get('https://league-of-legends-champions.p.rapidapi.com/statics', {period: 'month',
  //tier: 'Challenger'}, {});
  //this.http.get('/statics', {period: 'month',
  //tier: 'Challenger'}, {});
  return this.apiObservable;
}
}
