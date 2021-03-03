import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor() { }
  message:string;
  student=[
      'Mohit',
      'Sam',
      'sohail khan',
      'sonali',
      'monika','Mohan'
  ]
  checkSubscription:Subscription
  ngOnInit(): void {
      const source = interval(1500);
      this.checkSubscription = source.pipe(
        tap(res=>{
          if(this.student[res] === undefined){
                this.checkSubscription.unsubscribe()
                
          }}
        ),
        map(res=>this.student[res])
        ).subscribe(res=>{
         let node =  document.createElement('div')
         let textnode = document.createTextNode(res);
         node.appendChild(textnode)
         document.getElementById('Tap').appendChild(node)
          }
      )
       
  }

  // var node = document.createElement("LI");                 // Create a <li> node
  // var textnode = document.createTextNode("Water");         // Create a text node
  // node.appendChild(textnode);                              // Append the text to <li>
  // document.getElementById("myList").appendChild(node);
 
}
