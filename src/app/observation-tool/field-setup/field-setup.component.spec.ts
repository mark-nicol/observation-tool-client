import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from 'ng2-dragula';

import {FieldSetupComponent} from './field-setup.component';
import {ModularPanelComponent} from '../shared/components/modular-panel/modular-panel.component';
import {SpacialImageComponent} from './components/spacial-image/spacial-image.component';
import {FovParametersComponent} from './components/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/image-query/image-query.component';
import {SourceComponent} from './components/source/source.component';
import {SourceExpectedPropertiesComponent} from './components/source-expected-properties/source-expected-properties.component';
import {FieldCenterCoordinatesComponent} from '../field-centre-coordinates/field-center-coordinates.component';
import {FccRectangularComponent} from '../field-centre-coordinates/components/fcc-rectangular/fcc-rectangular.component';
import {FccIndividualComponent} from '../field-centre-coordinates/components/fcc-individual/fcc-individual.component';
import {SystemSelectorComponent} from '../shared/components/system-selector/system-selector.component';
import {PersistenceService} from '../shared/services/persistence.service';
import {DelayTooltipDirective} from '../shared/directives/delay-tooltip.directive';
import {SexagesimalPipe} from '../shared/pipes/sexagesimal.pipe';
import {DegreesPipe} from '../shared/pipes/degrees.pipe';
import {FormsModule} from '@angular/forms';

describe('FieldSetupComponent', () => {
  let component: FieldSetupComponent;
  let fixture: ComponentFixture<FieldSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldSetupComponent,
        ModularPanelComponent,
        SpacialImageComponent,
        FovParametersComponent,
        ImageQueryComponent,
        SourceComponent,
        SourceExpectedPropertiesComponent,
        FieldCenterCoordinatesComponent,
        FccRectangularComponent,
        FccIndividualComponent,
        SystemSelectorComponent,
        DelayTooltipDirective,
        SexagesimalPipe,
        DegreesPipe
      ],
      imports: [FormsModule, DragulaModule, NgbCollapseModule, NgbModule.forRoot()],
      providers: [PersistenceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});