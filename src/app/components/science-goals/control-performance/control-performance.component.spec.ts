import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPerformanceComponent } from './control-performance.component';

describe('ControlPerformanceComponent', () => {
  let component: ControlPerformanceComponent;
  let fixture: ComponentFixture<ControlPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
