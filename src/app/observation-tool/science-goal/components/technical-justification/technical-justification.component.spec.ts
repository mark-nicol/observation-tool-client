import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechnicalJustificationComponent} from './technical-justification.component';

describe('TechnicalJustificationComponent', () => {
  let component: TechnicalJustificationComponent;
  let fixture: ComponentFixture<TechnicalJustificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalJustificationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(TechnicalJustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
