import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';

import {PiResultsComponent} from './pi-results.component';
import {RefinePanelComponent} from './refine-panel/refine-panel.component';
import {ResultsTableComponent} from './results-table/results-table.component';

describe('PiResultsComponent', () => {
  let component: PiResultsComponent;
  let fixture: ComponentFixture<PiResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
        HttpClientModule
      ],
      declarations: [
        PiResultsComponent,
        RefinePanelComponent,
        ResultsTableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
