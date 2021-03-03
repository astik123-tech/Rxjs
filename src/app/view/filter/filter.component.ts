import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 length;
  constructor() { }
  student=[
    {
      id:1,
      name:'Mohit',
      gender:'Male'
    },
    {
      id:2,
      name:'Sam',
      gender:'Women'
    },
    {
      id:3,
      name:'sohail khan',
      gender:'Male'
    },
    {
      id:4,
      name:'sonali',
      gender:'Women'
    },
    {
      id:5,
      name:'monika',
      gender:'Women'
    },
    {
      id:6,
      name:'sheetal',
      gender:'Women'
    },
    {
      id:7,
      name:'Mohan',
      gender:'Male'
    }
  ]
  ngOnInit(): void {
    const  source = from(this.student)
    // EX -01
    source.pipe(
      filter(student=>student.gender ==='Women'),
      toArray()).subscribe(res=>{this.length = res})
    
  }

}
