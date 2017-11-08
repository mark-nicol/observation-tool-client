import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectralSetupComponent } from './spectral-setup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModularPanelComponent} from '../shared/components/modular-panel/modular-panel.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {TypeComponent} from './components/type/type.component';
import {PersistenceService} from '../shared/services/persistence.service';

describe('SpectralSetupComponent', () => {
  let component: SpectralSetupComponent;
  let fixture: ComponentFixture<SpectralSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpectralSetupComponent,
        ModularPanelComponent,
        VisualisationControlComponent,
        VisualisationViewerComponent,
        TypeComponent
      ],
      imports: [NgbModule.forRoot()],
      providers: [PersistenceService]
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
