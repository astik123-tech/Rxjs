import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observer',
  templateUrl: './custom-observer.component.html',
  styleUrls: ['./custom-observer.component.css']
})
export class CustomObserverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obser = Observable.create(observer => 
      {
        observer.next()
        observer.error();
        observer.completed();
        
      })
  }

}
