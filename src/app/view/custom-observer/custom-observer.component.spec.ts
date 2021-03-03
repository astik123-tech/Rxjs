import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObserverComponent } from './custom-observer.component';

describe('CustomObserverComponent', () => {
  let component: CustomObserverComponent;
  let fixture: ComponentFixture<CustomObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
