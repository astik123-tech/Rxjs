import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  resMessage;
  resMessage2;
  constructor() { }

  ngOnInit(): void {
    this.ofCheck();
    this.fromArray()
  }
 
  ofCheck(){
    const obs1 = of({a:'Mohan', b:'Sohan' , c:'tohan'})
    obs1.subscribe(res=>
     this.resMessage= res )
  }

  fromArray(){
    const obs2 = from(['Strokes', 'Harry', 'Smith' ])    
    obs2.subscribe(res=>{this.resMessage2 = res
     })
  }
}
