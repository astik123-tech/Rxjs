import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = true
  constructor(
    private utility:UtilityService
  ) { }

  ngOnInit(): void {
    this.utility.isLogin.subscribe(res=>this.isLogin=res)
  }

}
