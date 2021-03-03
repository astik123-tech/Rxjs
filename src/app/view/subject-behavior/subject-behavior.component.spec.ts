import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviorComponent } from './subject-behavior.component';

describe('SubjectBehaviorComponent', () => {
  let component: SubjectBehaviorComponent;
  let fixture: ComponentFixture<SubjectBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
