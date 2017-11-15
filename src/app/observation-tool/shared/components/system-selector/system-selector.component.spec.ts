import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DelayTooltipDirective} from '../../directives/delay-tooltip.directive';

import {SystemSelectorComponent} from './system-selector.component';

describe('SystemSelectorComponent', () => {
  let component: SystemSelectorComponent;
  let fixture: ComponentFixture<SystemSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SystemSelectorComponent, DelayTooltipDirective],
      imports: [NgbModule.forRoot(), FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SystemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
