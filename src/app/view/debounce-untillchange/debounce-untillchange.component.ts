import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-untillchange',
  templateUrl: './debounce-untillchange.component.html',
  styleUrls: ['./debounce-untillchange.component.css']
})
export class DebounceUntillchangeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput:ElementRef; 
  message;
  constructor() { }

  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
      map(event=>event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )
    searchTerm.subscribe(res=>{
      this.message = res
      
    })
  }
 
}
