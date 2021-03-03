import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  resMessage;
  sourceSub:Subscription;
  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()).subscribe(res=>{this.resMessage = res
        // ;console.log(res);
      })
  
  }



}
