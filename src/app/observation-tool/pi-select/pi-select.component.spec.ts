import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiSelectComponent } from './pi-select.component';

describe('PiSelectComponent', () => {
  let component: PiSelectComponent;
  let fixture: ComponentFixture<PiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
