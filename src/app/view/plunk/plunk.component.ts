import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-plunk',
  templateUrl: './plunk.component.html',
  styleUrls: ['./plunk.component.css']
})
export class PlunkComponent implements OnInit {
  message:any;
  constructor() { }
  student=[
    {
      id:1,
      name:'Mohit1'
    },
    {
      id:2,
      name:'Mohit2'
    },
    {
      id:3,
      name:'Mohit3'
    },
    {
      id:4,
      name:'Mohit4'
    },
    {
      id:5,
      name:'Mohit5'
    },
    {
      id:6,
      name:'Mohit6'
    },
    {
      id:7,
      name:'Mohit7'
    }
  ]
  ngOnInit(): void {
    from(this.student).pipe(
      pluck('name'), 
      toArray()
    ).subscribe(res => {this.message = res
    console.log(res);
    })
  }

}
