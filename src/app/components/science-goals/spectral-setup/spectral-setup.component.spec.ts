import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectralSetupComponent } from './spectral-setup.component';
import {ModularPanelComponent} from "../../modular-panel/modular-panel.component";
import {VisualisationComponent} from "./visualisation/visualisation.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TypeComponent} from "./type/type.component";

describe('SpectralSetupComponent', () => {
  let component: SpectralSetupComponent;
  let fixture: ComponentFixture<SpectralSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectralSetupComponent, ModularPanelComponent, VisualisationComponent, TypeComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectralSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
