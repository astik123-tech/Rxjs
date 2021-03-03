import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  LastValue:string= ''
  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
    this.utility.ASubject.subscribe((res:string)=>{
      console.log("res:",res);
      
      this.LastValue=res})
  }
  Additem(t){
    console.log("Value",t.value);
    
    this.utility.ASubject.next(t.value)
  }
  completeSub(){
    console.log("Complete");
     this.utility.ASubject.complete()
  }
}
