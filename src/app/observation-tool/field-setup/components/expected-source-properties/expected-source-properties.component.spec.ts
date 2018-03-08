import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {ExpectedSourcePropertiesComponent} from './expected-source-properties.component';


describe('ExpectedSourcePropertiesComponent', () => {
  let component: ExpectedSourcePropertiesComponent;
  let fixture: ComponentFixture<ExpectedSourcePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpectedSourcePropertiesComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        SuiModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        PersistenceService
      ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ExpectedSourcePropertiesComponent);
    component = fixture.componentInstance;
    const formBuilder = new FormBuilder();
    component.form = this.formBuilder.group({
      ExpectedProperties: this.formBuilder.group({
        expectedPeakFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
        desiredCircularPolarizationPercentage: 0.0,
        expectedPeakLineFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
        expectedLineWidth: this.formBuilder.group({userUnit: '', content: 0.0}),
        desiredLinePolarizationPercentage: 0.0
      }),
      SinglePoint: this.formBuilder.array([]),
      index: -1,
      isMosaic: true,
      nonSiderealMotion: false,
      parallax: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      pmDec: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      pmRA: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      solarSystemObject: 'Unspecified',
      sourceCoordinates: this.formBuilder.group({
        fieldName: 'None',
        latitude: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        longitude: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        system: 'ICRS',
        type: 'ABSOLUTE',
      }),
      sourceEphemeris: '',
      sourceName: ['', Validators.required],
      sourceVelocity: this.formBuilder.group({
        centerVelocity: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        dopplerCalcType: '',
        redshift: 0,
        referenceSystem: '',
      }),
      type: '',
    });
    fixture.detectChanges();

  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
