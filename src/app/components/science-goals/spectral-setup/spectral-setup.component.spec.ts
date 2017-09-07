import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectralSetupComponent } from './spectral-setup.component';

describe('SpectralSetupComponent', () => {
  let component: SpectralSetupComponent;
  let fixture: ComponentFixture<SpectralSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectralSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectralSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
