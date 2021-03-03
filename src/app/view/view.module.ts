import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { HomeComponent } from './home/home.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObserverComponent } from './custom-observer/custom-observer.component';
import { MapComponent } from './map/map.component';
import { PlunkComponent } from './plunk/plunk.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceUntillchangeComponent } from './debounce-untillchange/debounce-untillchange.component';
import { SubjectBehaviorComponent } from './subject-behavior/subject-behavior.component';
import { ReplySubjectComponent } from './reply-subject/reply-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [ViewComponent, IntervalComponent, OfFromComponent, HomeComponent, ToArrayComponent, CustomObserverComponent, MapComponent, PlunkComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceUntillchangeComponent, SubjectBehaviorComponent, ReplySubjectComponent, AsyncSubjectComponent, HeaderComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
