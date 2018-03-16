import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {ModularPanelComponent} from '../shared/components/modular-panel/modular-panel.component';
import {PersistenceService} from '../shared/services/persistence.service';
import {LineSelectionComponent} from './components/line-selection/line-selection.component';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralDataService} from './services/spectral-data.service';

import {SpectralSetupComponent} from './spectral-setup.component';

describe('SpectralSetupComponent', () => {
  let component: SpectralSetupComponent;
  let fixture: ComponentFixture<SpectralSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpectralSetupComponent,
        VisualisationControlComponent,
        VisualisationViewerComponent,
        TypeComponent,
        LineSelectionComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, SuiModule],
      providers: [PersistenceService, SpectralDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SpectralSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
