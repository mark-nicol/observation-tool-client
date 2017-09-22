import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FccRectangularComponent } from './fcc-rectangular.component';
import {SystemSelectorComponent} from "../../system-selector/system-selector.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DelayTooltipDirective} from "../../../../../directives/delay-tooltip.directive";
import {FormsModule} from "@angular/forms";

describe('FccRectangularComponent', () => {
  let component: FccRectangularComponent;
  let fixture: ComponentFixture<FccRectangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FccRectangularComponent, SystemSelectorComponent, DelayTooltipDirective ],
      imports: [NgbModule.forRoot(), FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FccRectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
