
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  timerMsg:any;
  vedioSubscription:Subscription
  constructor() { }

  ngOnInit(): void {
    //  this.interval();
     this.timer();
  }
  // interval(){
  //    const broadCastVedio = interval(1000);

  //    this.vedioSubscription = broadCastVedio.subscribe(res=>{
  //     this.obsMsg = `Video ${res}`;
  //   })
  // }

 

  /*********************************************************************************/

  timer(){
    const broadCastVedio = timer(5000, 1000)

    this.vedioSubscription = broadCastVedio.subscribe(res=>{
     this.timerMsg = `Timer ${res}`;
   })
  }

  Unsubscribe(){
    this.vedioSubscription.unsubscribe()
  }
}
