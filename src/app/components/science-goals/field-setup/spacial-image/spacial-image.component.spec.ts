import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacialImageComponent } from './spacial-image.component';
import {DelayTooltipDirective} from "../../../../directives/delay-tooltip.directive";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('SpacialImageComponent', () => {
  let component: SpacialImageComponent;
  let fixture: ComponentFixture<SpacialImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacialImageComponent, DelayTooltipDirective ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacialImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
