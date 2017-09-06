import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceComponent } from './source.component';
import {FormsModule} from "@angular/forms";
import {SexagesimalPipe} from "../../../pipes/sexagesimal.pipe";
import {DegreesPipe} from "../../../pipes/degrees.pipe";

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceComponent, SexagesimalPipe, DegreesPipe ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
