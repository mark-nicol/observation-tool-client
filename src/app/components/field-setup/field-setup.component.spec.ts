import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DragulaModule} from "ng2-dragula";
import {ModularPanelComponent} from "../modular-panel/modular-panel.component";

import {FieldSetupComponent} from './field-setup.component';
import {FovParametersComponent} from "./fov-parameters/fov-parameters.component";
import {ImageQueryComponent} from "./image-query/image-query.component";
import {SpacialImageComponent} from "./spacial-image/spacial-image.component";
import {SourceComponent} from "./source/source.component";
import {SourceExpectedPropertiesComponent} from "./source-expected-properties/source-expected-properties.component";
import {FieldCenterCoordinatesComponent} from "./field-center-coordinates/field-center-coordinates.component";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {BrowserTestingModule} from "@angular/platform-browser/testing";

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
        FieldCenterCoordinatesComponent
      ],
      imports: [DragulaModule, NgbCollapseModule, FormsModule]
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
