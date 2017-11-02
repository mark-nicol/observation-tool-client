import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectralSetupComponent } from './spectral-setup.component';
import {ModularPanelComponent} from "../../modular-panel/modular-panel.component";
import {VisualisationControlComponent} from "./visualisation-control/visualisation-control.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TypeComponent} from "./type/type.component";
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";
import {SelectableComponent} from "../../selectable/selectable.component";

describe('SpectralSetupComponent', () => {
  let component: SpectralSetupComponent;
  let fixture: ComponentFixture<SpectralSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpectralSetupComponent,
        ModularPanelComponent,
        VisualisationControlComponent,
        TypeComponent,
        SelectableComponent
      ],
      imports: [NgbModule.forRoot()],
      providers: [ScienceGoalPanelService]
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
