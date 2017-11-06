import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationControlComponent } from './visualisation-control.component';
import {SelectableComponent} from "../../../selectable/selectable.component";

describe('VisualisationControlComponent', () => {
  let component: VisualisationControlComponent;
  let fixture: ComponentFixture<VisualisationControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VisualisationControlComponent, SelectableComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
