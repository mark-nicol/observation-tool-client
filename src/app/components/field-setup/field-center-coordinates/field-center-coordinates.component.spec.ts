import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCenterCoordinatesComponent } from './field-center-coordinates.component';

describe('FieldCenterCoordinatesComponent', () => {
  let component: FieldCenterCoordinatesComponent;
  let fixture: ComponentFixture<FieldCenterCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldCenterCoordinatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCenterCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
