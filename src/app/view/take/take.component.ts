import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Subscription } from 'rxjs';
import { map, take, takeLast, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  
  student=[
    'Mohit',
    'Sam',
    'sohail khan',
    'sonali',
    'monika',
    'Mohan'
]

  constructor() { }

  ngOnInit(): void {
  from(this.student).pipe(take(4)).subscribe(res=>
    {
    let node =  document.createElement('li')
    let textnode = document.createTextNode(res);
    node.appendChild(textnode)
    document.getElementById('take').appendChild(node)
  })

  /***********************************************************************************/
   const source2 = from(this.student)
    source2.pipe(
      takeLast(4)
      ).subscribe(res=>
    {
    let node =  document.createElement('li')
    let textnode = document.createTextNode(res);
    node.appendChild(textnode)
    
    document.getElementById('lastTake').appendChild(node)
  })

  /***********************************************************************************/
   const source3 =  interval(500)
   let condition  = fromEvent(document,'click')
    source3.pipe(
     takeUntil(condition),
     map(res=>'Number'+' '+res)
      ).subscribe(res=>
    {
    let node =  document.createElement('li')
    let textnode = document.createTextNode(res);
    node.appendChild(textnode)
    
    document.getElementById('untillTake').appendChild(node)
  })
  }


}
