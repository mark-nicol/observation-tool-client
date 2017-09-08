import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponent } from './general.component';
import {FormsModule} from "@angular/forms";
import {ModularPanelComponent} from "../../modular-panel/modular-panel.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralComponent, ModularPanelComponent ],
      imports: [FormsModule, NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
