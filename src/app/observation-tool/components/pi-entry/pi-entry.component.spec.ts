import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiEntryComponent } from './pi-entry.component';
import { PiSearchComponent } from "./pi-search/pi-search.component";
import { ProjectInfoComponent } from "./project-info/project-info.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('PiEntryComponent', () => {
  let component: PiEntryComponent;
  let fixture: ComponentFixture<PiEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PiEntryComponent,
        PiSearchComponent,
        ProjectInfoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
