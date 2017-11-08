import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiSelectComponent } from './pi-select.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('PiSelectComponent', () => {
  let component: PiSelectComponent;
  let fixture: ComponentFixture<PiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, RouterTestingModule],
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
