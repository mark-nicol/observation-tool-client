import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSelectorComponent } from './system-selector.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DelayTooltipDirective} from "../../../../directives/delay-tooltip.directive";
import {FormsModule} from "@angular/forms";

describe('SystemSelectorComponent', () => {
  let component: SystemSelectorComponent;
  let fixture: ComponentFixture<SystemSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSelectorComponent, DelayTooltipDirective ],
      imports: [NgbModule.forRoot(), FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
