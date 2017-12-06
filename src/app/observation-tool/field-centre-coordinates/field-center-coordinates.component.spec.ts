import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {SystemSelectorComponent} from '../shared/components/system-selector/system-selector.component';
import {DelayTooltipDirective} from '../shared/directives/delay-tooltip.directive';
import {DegreesPipe} from '../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../shared/pipes/sexagesimal.pipe';
import {PersistenceService} from '../shared/services/persistence.service';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';

import {FieldCenterCoordinatesComponent} from './field-center-coordinates.component';

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
        FccIndividualComponent,
        FccRectangularComponent,
        SystemSelectorComponent
      ],
      imports: [FormsModule, NgbModule.forRoot(), SuiModule],
      providers: [PersistenceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FieldCenterCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
