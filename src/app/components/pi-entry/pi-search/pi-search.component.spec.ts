import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiSearchComponent } from './pi-search.component';

describe('PiSearchComponent', () => {
  let component: PiSearchComponent;
  let fixture: ComponentFixture<PiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
