import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceGoalComponent } from './science-goal.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ScienceGoalPanelService} from "../../services/science-goal-panel.service";

describe('ScienceGoalComponent', () => {
  let component: ScienceGoalComponent;
  let fixture: ComponentFixture<ScienceGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceGoalComponent ],
      imports: [RouterTestingModule],
      providers: [ScienceGoalPanelService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});