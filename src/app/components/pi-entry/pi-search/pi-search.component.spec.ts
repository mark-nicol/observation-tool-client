import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiSearchComponent } from './pi-search.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('PiSearchComponent', () => {
  let component: PiSearchComponent;
  let fixture: ComponentFixture<PiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
