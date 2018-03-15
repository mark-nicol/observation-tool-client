import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AladinService} from '../../services/aladin.service';
import {PointingService} from '../../services/pointing.service';

import { PointingCanvasComponent } from './pointing-canvas.component';

describe('PointingCanvasComponent', () => {
  let component: PointingCanvasComponent;
  let fixture: ComponentFixture<PointingCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointingCanvasComponent ],
      providers: [PointingService, AladinService]
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
