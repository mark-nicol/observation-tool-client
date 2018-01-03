import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {DelayTooltipDirective} from '../../../shared/directives/delay-tooltip.directive';

import {SourceExpectedPropertiesComponent} from './source-expected-properties.component';


describe('SourceExpectedPropertiesComponent', () => {
  let component: SourceExpectedPropertiesComponent;
  let fixture: ComponentFixture<SourceExpectedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourceExpectedPropertiesComponent, DelayTooltipDirective],
      imports: [NgbModule.forRoot(), SuiModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SourceExpectedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
