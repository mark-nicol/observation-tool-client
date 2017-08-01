import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PiSelectComponent} from './pi-select.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RefinePanelComponent} from "./refine-panel/refine-panel.component";
import {ResultsTableComponent} from "./results-table/results-table.component";
import {HttpModule} from "@angular/http";

describe('PiSelectComponent', () => {
  let component: PiSelectComponent;
  let fixture: ComponentFixture<PiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        PiSelectComponent,
        RefinePanelComponent,
        ResultsTableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
