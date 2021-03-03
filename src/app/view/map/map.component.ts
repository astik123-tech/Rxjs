import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  Message;
  resMessage:Subscription;
  ngOnInit(): void {
   const broadCastVedio = interval(1000);
   this.resMessage = broadCastVedio.pipe(
     map(data=>data = data*10) 
   )
   .subscribe(res=>{
    //  this.resMessage = res
     this.Message= res
   })

   setTimeout(()=>{this.resMessage.unsubscribe()}, 10000)
  }


}
