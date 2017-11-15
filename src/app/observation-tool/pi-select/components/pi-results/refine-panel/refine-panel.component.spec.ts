import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RefinePanelComponent} from './refine-panel.component';

describe('RefinePanelComponent', () => {
  let component: RefinePanelComponent;
  let fixture: ComponentFixture<RefinePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinePanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(RefinePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
