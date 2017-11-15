import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SystemSelectorComponent} from '../../../shared/components/system-selector/system-selector.component';
import {DelayTooltipDirective} from '../../../shared/directives/delay-tooltip.directive';
import {DegreesPipe} from '../../../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../../../shared/pipes/sexagesimal.pipe';

import {FccRectangularComponent} from './fcc-rectangular.component';

describe('FccRectangularComponent', () => {
  let component: FccRectangularComponent;
  let fixture: ComponentFixture<FccRectangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FccRectangularComponent,
        SystemSelectorComponent,
        DelayTooltipDirective,
        SexagesimalPipe,
        DegreesPipe],
      imports: [
        NgbModule.forRoot(),
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FccRectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
