import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationSetupComponent } from './calibration-setup.component';

describe('CalibrationSetupComponent', () => {
  let component: CalibrationSetupComponent;
  let fixture: ComponentFixture<CalibrationSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibrationSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
