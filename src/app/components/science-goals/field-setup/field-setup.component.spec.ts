import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DragulaModule} from "ng2-dragula";
import {ModularPanelComponent} from "../../modular-panel/modular-panel.component";

import {FieldSetupComponent} from './field-setup.component';
import {FovParametersComponent} from "./fov-parameters/fov-parameters.component";
import {ImageQueryComponent} from "./image-query/image-query.component";
import {SpacialImageComponent} from "./spacial-image/spacial-image.component";
import {SourceComponent} from "./source/source.component";
import {SourceExpectedPropertiesComponent} from "./source-expected-properties/source-expected-properties.component";
import {FieldCenterCoordinatesComponent} from "./field-center-coordinates/field-center-coordinates.component";
import {NgbCollapseModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {BrowserTestingModule} from "@angular/platform-browser/testing";
import {SexagesimalPipe} from "../../../pipes/sexagesimal.pipe";
import {DegreesPipe} from "../../../pipes/degrees.pipe";
import {DelayTooltipDirective} from "../../../directives/delay-tooltip.directive";
import {SelectableComponent} from "../../selectable/selectable.component";
import {FccRectangularComponent} from "./field-center-coordinates/fcc-rectangular/fcc-rectangular.component";
import {FccIndividualComponent} from "./field-center-coordinates/fcc-individual/fcc-individual.component";
import {SystemSelectorComponent} from "./system-selector/system-selector.component";

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
        SexagesimalPipe,
        DegreesPipe,
        DelayTooltipDirective,
        SelectableComponent,
        FccRectangularComponent,
        FccIndividualComponent,
        SystemSelectorComponent
      ],
      imports: [DragulaModule, NgbCollapseModule, FormsModule, NgbModule.forRoot()]
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
