import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-subject-behavior',
  templateUrl: './subject-behavior.component.html',
  styleUrls: ['./subject-behavior.component.css']
})
export class SubjectBehaviorComponent implements OnInit, OnDestroy {

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {

  }
//  we can initialize the value in behavior subject but we cannot initialize the value in subject
  islogin(){
    this.utility.isLogin.next(false)
  }

  ngOnDestroy(){
    this.utility.isLogin.next(true)
  }
}
