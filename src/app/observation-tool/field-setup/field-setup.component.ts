import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SuiPopupConfig} from 'ng2-semantic-ui';
import {Observable} from 'rxjs/Rx';
import {Speed} from '../../units/classes/speed';
import {SinglePoint} from '../shared/classes/science-goal/single-point';
import {PersistenceService} from '../shared/services/persistence.service';
import {SourceComponent} from './components/source/source.component';

/**
 * Handles the field setup page of a science goal
 */

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css']
})

export class FieldSetupComponent implements OnInit {

  form = this.formBuilder.group({
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

  get resolveCoordinates(): number[] {
    return this._resolveCoordinates;
  }

  set resolveCoordinates(value: number[]) {
    this._resolveCoordinates = value;
  }

  currentTarget = 0;

  private _resolveCoordinates: number[];

  /**
   * constructor
   * @param config             Config for the popups, used to delay showing
   * @param formBuilder
   * @param persistenceService
   * @param activatedRoute
   */
  constructor(private config: SuiPopupConfig,
              private formBuilder: FormBuilder,
              private persistenceService: PersistenceService,
              private activatedRoute: ActivatedRoute) {
    this.config.delay = 1000;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentTarget = params.index ? params.index : this.persistenceService.currentTarget;
      this.initForm(this.currentTarget);
    });
    this.observeFormChanges();
  }

  initForm(index: number) {
    this.persistenceService.getScienceGoal()
        .subscribe(result => {
          const targetParams = result.TargetParameters[index];
          this.form.patchValue({
            ExpectedProperties: {
              expectedPeakFluxDensity: targetParams.ExpectedProperties.expectedPeakFluxDensity,
              desiredCircularPolarizationPercentage: targetParams.ExpectedProperties.desiredCircularPolarizationPercentage,
              expectedPeakLineFluxDensity: targetParams.ExpectedProperties.expectedPeakLineFluxDensity,
              expectedLineWidth: targetParams.ExpectedProperties.expectedLineWidth,
              desiredLinePolarizationPercentage: targetParams.ExpectedProperties.desiredLinePolarizationPercentage
            },
            type: targetParams.type,
            sourceName: targetParams.sourceName,
            solarSystemObject: targetParams.solarSystemObject,
            radialVelocityReferenceSystem: targetParams.sourceVelocity.referenceSystem,
            sourceCoordinates: {
              system: targetParams.sourceCoordinates.system,
              type: targetParams.sourceCoordinates.type,
              longitude: targetParams.sourceCoordinates.longitude,
              latitude: targetParams.sourceCoordinates.latitude,
            },
            parallax: targetParams.parallax,
            sourceVelocity: {
              centerVelocity: targetParams.sourceVelocity.centerVelocity,
              dopplerCalcType: targetParams.sourceVelocity.dopplerCalcType,
              referenceSystem: targetParams.sourceVelocity.referenceSystem,
              redshift: SourceComponent.getRedshift(Object.assign(new Speed,
                targetParams.sourceVelocity.centerVelocity),
                targetParams.sourceVelocity.dopplerCalcType)
            },
            pmRA: targetParams.pmRA,
            pmDec: targetParams.pmDec,
          });
          this.setSinglePoint(targetParams.SinglePoint);
        });
  }

  setSinglePoint(points: SinglePoint[]) {
    const formGroups           = points.map(point => this.formBuilder.group({
      name: point.name,
      centre: this.formBuilder.group({
        system: point.centre.system,
        type: point.centre.type,
        longitude: this.formBuilder.group({unit: point.centre.longitude.unit, content: point.centre.longitude.content}),
        latitude: this.formBuilder.group({unit: point.centre.latitude.unit, content: point.centre.latitude.content}),
        fieldName: point.centre.fieldName
      })
    }));
    const singlePointFormArray = this.formBuilder.array(formGroups);
    this.form.setControl('SinglePoint', singlePointFormArray);
  }

  observeFormChanges() {
    const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      console.log(value);
    });
  }

}
