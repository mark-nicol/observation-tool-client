import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AladinService} from '../../services/aladin.service';

import {PointingCanvasComponent} from './pointing-canvas.component';
import {ProjectService} from '../../../shared/services/project.service';

describe('PointingCanvasComponent', () => {
  let component: PointingCanvasComponent;
  let fixture: ComponentFixture<PointingCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PointingCanvasComponent],
      providers: [ProjectService, AladinService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointingCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
