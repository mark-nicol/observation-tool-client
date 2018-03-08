import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {DegreesPipe} from '../../../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../../../shared/pipes/sexagesimal.pipe';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {SimbadService} from '../../../shared/services/simbad.service';
import {SystemService} from '../../../shared/services/system.service';

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
                                     ],
                                     imports: [
                                       HttpClientTestingModule,
                                       ReactiveFormsModule,
                                       FormsModule,
                                       SuiModule,
                                       RouterTestingModule
                                     ],
                                     providers: [
                                       PersistenceService,
                                       SystemService,
                                       SimbadService,
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
