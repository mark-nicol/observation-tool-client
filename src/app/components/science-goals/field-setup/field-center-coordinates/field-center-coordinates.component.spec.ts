import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCenterCoordinatesComponent } from './field-center-coordinates.component';
import {FormsModule} from "@angular/forms";
import {SexagesimalPipe} from "../../../../pipes/sexagesimal.pipe";
import {DegreesPipe} from "../../../../pipes/degrees.pipe";
import {DelayTooltipDirective} from "../../../../directives/delay-tooltip.directive";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SelectableComponent} from "../../../selectable/selectable.component";
import {FccIndividualComponent} from "./fcc-individual/fcc-individual.component";
import {FccRectangularComponent} from "./fcc-rectangular/fcc-rectangular.component";
import {SystemSelectorComponent} from "../system-selector/system-selector.component";

describe('FieldCenterCoordinatesComponent', () => {
  let component: FieldCenterCoordinatesComponent;
  let fixture: ComponentFixture<FieldCenterCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldCenterCoordinatesComponent,
        SexagesimalPipe,
        DegreesPipe,
        DelayTooltipDirective,
        SelectableComponent,
        FccIndividualComponent,
        FccRectangularComponent,
        SystemSelectorComponent
      ],
      imports: [FormsModule, NgbModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCenterCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
