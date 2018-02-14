import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSelectionComponent } from './line-selection.component';

describe('LineSelectionComponent', () => {
  let component: LineSelectionComponent;
  let fixture: ComponentFixture<LineSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
