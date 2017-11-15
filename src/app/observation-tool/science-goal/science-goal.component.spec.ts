import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {PersistenceService} from '../shared/services/persistence.service';

import {ScienceGoalComponent} from './science-goal.component';


describe('ScienceGoalComponent', () => {
  let component: ScienceGoalComponent;
  let fixture: ComponentFixture<ScienceGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScienceGoalComponent],
      imports: [RouterTestingModule],
      providers: [PersistenceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ScienceGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
