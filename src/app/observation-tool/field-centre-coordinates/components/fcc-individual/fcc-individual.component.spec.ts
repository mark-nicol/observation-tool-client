import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {DelayTooltipDirective} from '../../../shared/directives/delay-tooltip.directive';
import {DegreesPipe} from '../../../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../../../shared/pipes/sexagesimal.pipe';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {FccIndividualComponent} from './fcc-individual.component';

describe('FccIndividualComponent', () => {
  let component: FccIndividualComponent;
  let fixture: ComponentFixture<FccIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FccIndividualComponent,
        SexagesimalPipe,
        DegreesPipe,
      ],
      imports: [NgbModule.forRoot(), FormsModule, SuiModule],
      providers: [PersistenceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FccIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
