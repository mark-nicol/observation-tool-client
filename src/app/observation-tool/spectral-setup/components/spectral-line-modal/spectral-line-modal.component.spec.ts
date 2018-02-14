import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectralLineModalComponent } from './spectral-line-modal.component';

describe('SpectralLineModalComponent', () => {
  let component: SpectralLineModalComponent;
  let fixture: ComponentFixture<SpectralLineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectralLineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectralLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
