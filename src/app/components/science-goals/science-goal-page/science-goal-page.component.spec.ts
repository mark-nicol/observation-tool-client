import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceGoalPageComponent } from './science-goal-page.component';

describe('ScienceGoalPageComponent', () => {
  let component: ScienceGoalPageComponent;
  let fixture: ComponentFixture<ScienceGoalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceGoalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceGoalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
