import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultsTableComponent} from './results-table.component';
import {HttpModule} from "@angular/http";

describe('ResultsTableComponent', () => {
  let component: ResultsTableComponent;
  let fixture: ComponentFixture<ResultsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ResultsTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
