import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationViewerComponent } from './visualisation-viewer.component';

describe('VisualisationViewerComponent', () => {
  let component: VisualisationViewerComponent;
  let fixture: ComponentFixture<VisualisationViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationViewerComponent ]
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
