import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCenterCoordinatesComponent } from './field-center-coordinates.component';
import {FormsModule} from "@angular/forms";
import {SexagesimalPipe} from "../../../pipes/sexagesimal.pipe";
import {DegreesPipe} from "../../../pipes/degrees.pipe";
import {DelayTooltipDirective} from "../../../directives/delay-tooltip.directive";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

describe('FieldCenterCoordinatesComponent', () => {
  let component: FieldCenterCoordinatesComponent;
  let fixture: ComponentFixture<FieldCenterCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldCenterCoordinatesComponent, SexagesimalPipe, DegreesPipe, DelayTooltipDirective ],
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
