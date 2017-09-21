import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FccIndividualComponent } from './fcc-individual.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DelayTooltipDirective} from "../../../../../directives/delay-tooltip.directive";
import {FormsModule} from "@angular/forms";
import {SexagesimalPipe} from "../../../../../pipes/sexagesimal.pipe";
import {DegreesPipe} from "../../../../../pipes/degrees.pipe";

describe('FccIndividualComponent', () => {
  let component: FccIndividualComponent;
  let fixture: ComponentFixture<FccIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FccIndividualComponent, DelayTooltipDirective, SexagesimalPipe, DegreesPipe ],
      imports: [NgbModule.forRoot(), FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FccIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
