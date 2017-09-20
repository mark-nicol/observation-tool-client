import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FovParametersComponent } from './fov-parameters.component';
import {SelectableComponent} from "../../../selectable/selectable.component";

describe('FovParametersComponent', () => {
  let component: FovParametersComponent;
  let fixture: ComponentFixture<FovParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FovParametersComponent,
        SelectableComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FovParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
