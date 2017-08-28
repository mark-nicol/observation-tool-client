import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSetupComponent } from './field-setup.component';

describe('FieldSetupComponent', () => {
  let component: FieldSetupComponent;
  let fixture: ComponentFixture<FieldSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
