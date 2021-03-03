import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { CustomObserverComponent } from './custom-observer/custom-observer.component';
import { DebounceUntillchangeComponent } from './debounce-untillchange/debounce-untillchange.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PlunkComponent } from './plunk/plunk.component';
import { ReplySubjectComponent } from './reply-subject/reply-subject.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectBehaviorComponent } from './subject-behavior/subject-behavior.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';


const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
   children:[
 
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'interval',
    component:IntervalComponent
  },
  {
    path:'of-from',
    component:OfFromComponent
  },
  {
    path:'toArray',
    component:ToArrayComponent
  },
  {
    path:'custom-observer',
    component:CustomObserverComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'pluck',
    component:PlunkComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'tap',
    component:TapComponent
  },
  {
    path:'take',
    component:TakeComponent
  },
  {
    path:'retry',
    component:RetryComponent
  },
  {
    path:'debounce-untill-change',
    component:DebounceUntillchangeComponent
  },
  {
    path:'subject-behavior',
    component:SubjectBehaviorComponent
  },
  {
    path:'reply-subject',
    component:ReplySubjectComponent
  },
  {
    path:'async-subject',
    component:AsyncSubjectComponent
  },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
