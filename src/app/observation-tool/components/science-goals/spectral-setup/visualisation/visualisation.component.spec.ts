import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationComponent } from './visualisation.component';
import {SelectableComponent} from "../../../selectable/selectable.component";

describe('VisualisationComponent', () => {
  let component: VisualisationComponent;
  let fixture: ComponentFixture<VisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VisualisationComponent, SelectableComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
