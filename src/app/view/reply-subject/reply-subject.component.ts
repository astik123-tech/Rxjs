import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.css']
})
export class ReplySubjectComponent implements OnInit {
 itemList1:any=[]
 itemList2:any=[]
 itemList3:any=[]
  constructor( private utility:UtilityService) { }
  checkSUb1:Subscription
  checkSUb2:Subscription
  user2:boolean=true;
  user3:boolean=true
  num;
  response;
  ngOnInit(): void {
    this.num = interval(500)
      this.num.subscribe(res=>{ 
    this.utility.itemList.next( res)
    })
   this.utility.itemList.subscribe((res:any)=>{this.itemList1.push(res)})
  
  }
 
  Additem(t){
    this.utility.itemList.next(t.value)
  }

  subscribeUser2(){
    this.checkSUb1 = this.utility.itemList.subscribe((res:any)=>{this.itemList2.push(res)
      this.user2 = false})
  }
  subscribeUser3(){
    this.checkSUb2 = this.utility.itemList.subscribe((res:any)=>{this.itemList3.push(res)
    
      this.user3 = false})
  }
  Unsub(){
    this.checkSUb1.unsubscribe()
    this.user2 = !this.user2
  }
  Unsub2(){
    this.checkSUb2.unsubscribe()
    this.user3 = !this.user3
  }
}
