import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeComponent} from './type.component';
import {SelectableComponent} from "../../../selectable/selectable.component";

describe('TypeComponent', () => {
  let component: TypeComponent;
  let fixture: ComponentFixture<TypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TypeComponent,
        SelectableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
