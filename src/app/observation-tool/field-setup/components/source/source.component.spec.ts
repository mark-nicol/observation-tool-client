import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {SystemSelectorComponent} from '../../../shared/components/system-selector/system-selector.component';
import {DelayTooltipDirective} from '../../../shared/directives/delay-tooltip.directive';
import {DegreesPipe} from '../../../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../../../shared/pipes/sexagesimal.pipe';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {SourceComponent} from './source.component';

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SourceComponent,
        SexagesimalPipe,
        DegreesPipe,
        DelayTooltipDirective,
        SystemSelectorComponent
      ],
      imports: [FormsModule, NgbModule.forRoot(), SuiModule],
      providers: [PersistenceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
