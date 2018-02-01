import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuiModule} from 'ng2-semantic-ui';
import {DegreesPipe} from '../../../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../../../shared/pipes/sexagesimal.pipe';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {SystemService} from '../../../shared/services/system.service';

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
                                     imports: [
                                       NgbModule.forRoot(),
                                       ReactiveFormsModule,
                                       SuiModule,
                                       HttpClientTestingModule
                                     ],
                                     providers: [
                                       PersistenceService,
                                       SystemService
                                     ]
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
