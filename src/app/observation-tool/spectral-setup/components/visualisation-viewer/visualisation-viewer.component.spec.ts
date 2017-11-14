import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationViewerComponent } from './visualisation-viewer.component';
import {SpectralDataService} from '../../services/spectral-data.service';
import {HttpClientModule} from '@angular/common/http';

describe('VisualisationViewerComponent', () => {
  let component: VisualisationViewerComponent;
  let fixture: ComponentFixture<VisualisationViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VisualisationViewerComponent ],
      providers: [SpectralDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
