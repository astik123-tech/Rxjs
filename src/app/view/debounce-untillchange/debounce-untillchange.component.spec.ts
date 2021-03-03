import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceUntillchangeComponent } from './debounce-untillchange.component';

describe('DebounceUntillchangeComponent', () => {
  let component: DebounceUntillchangeComponent;
  let fixture: ComponentFixture<DebounceUntillchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceUntillchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceUntillchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
