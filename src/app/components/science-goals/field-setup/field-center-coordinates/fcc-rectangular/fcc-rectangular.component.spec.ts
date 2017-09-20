import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FccRectangularComponent } from './fcc-rectangular.component';

describe('FccRectangularComponent', () => {
  let component: FccRectangularComponent;
  let fixture: ComponentFixture<FccRectangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FccRectangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FccRectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
