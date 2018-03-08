import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {DegreesPipe} from '../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../shared/pipes/sexagesimal.pipe';
import {PersistenceService} from '../shared/services/persistence.service';
import {SystemService} from '../shared/services/system.service';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';

import {FieldCenterCoordinatesComponent} from './field-center-coordinates.component';

describe('FieldCenterCoordinatesComponent', () => {
  let component: FieldCenterCoordinatesComponent;
  let fixture: ComponentFixture<FieldCenterCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [
                                       FieldCenterCoordinatesComponent,
                                       SexagesimalPipe,
                                       DegreesPipe,
                                       FccIndividualComponent,
                                       FccRectangularComponent
                                     ],
                                     imports: [
                                       ReactiveFormsModule,
                                       SuiModule,
                                       HttpClientTestingModule,
                                       RouterTestingModule
                                     ],
                                     providers: [
                                       PersistenceService,
                                       SystemService
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FieldCenterCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
