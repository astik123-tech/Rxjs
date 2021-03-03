import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  isLogin = new Subject<boolean>();
  itemList = new ReplaySubject<any>(5, 5000)
  ASubject =  new AsyncSubject<string>()
  constructor() { }
}
