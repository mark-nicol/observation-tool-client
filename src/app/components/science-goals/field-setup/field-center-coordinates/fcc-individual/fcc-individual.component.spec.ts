import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FccIndividualComponent } from './fcc-individual.component';

describe('FccIndividualComponent', () => {
  let component: FccIndividualComponent;
  let fixture: ComponentFixture<FccIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FccIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FccIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
