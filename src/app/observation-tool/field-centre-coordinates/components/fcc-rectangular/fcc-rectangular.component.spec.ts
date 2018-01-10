import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {SystemSelectorComponent} from '../../../shared/components/system-selector/system-selector.component';
import {DelayTooltipDirective} from '../../../shared/directives/delay-tooltip.directive';
import {DegreesPipe} from '../../../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../../../shared/pipes/sexagesimal.pipe';
import {SystemService} from '../../../shared/services/system.service';

import {FccRectangularComponent} from './fcc-rectangular.component';

describe('FccRectangularComponent', () => {
  let component: FccRectangularComponent;
  let fixture: ComponentFixture<FccRectangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FccRectangularComponent,
        SexagesimalPipe,
        DegreesPipe
      ],
      imports: [
        ReactiveFormsModule,
        SuiModule
      ],
      providers: [
        SystemService
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
