import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SuiPopupConfig} from 'ng2-semantic-ui';
import {Observable} from 'rxjs/Rx';
import {SinglePoint} from '../shared/classes/science-goal/single-point';
import {PersistenceService} from '../shared/services/persistence.service';
import {SourceComponent} from './components/source/source.component';
import {Speed} from '../../units/classes/speed';

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
    prj_ExpectedProperties: this.formBuilder.group({
      prj_expectedPeakFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
      prj_desiredCircularPolarizationPercentage: 0.0,
      prj_expectedPeakLineFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
      prj_expectedLineWidth: this.formBuilder.group({userUnit: '', content: 0.0}),
      prj_desiredLinePolarizationPercentage: 0.0
    }),
    prj_SinglePoint: this.formBuilder.array([]),
    index: -1,
    prj_isMosaic: true,
    prj_nonSiderealMotion: false,
    prj_parallax: this.formBuilder.group({
      unit: '',
      content: 0.0
    }),
    prj_pmDec: this.formBuilder.group({
      unit: '',
      content: 0.0
    }),
    prj_pmRA: this.formBuilder.group({
      unit: '',
      content: 0.0
    }),
    solarSystemObject: 'Unspecified',
    prj_sourceCoordinates: this.formBuilder.group({
      val_fieldName: 'None',
      val_latitude: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      val_longitude: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      system: 'ICRS',
      type: 'ABSOLUTE',
    }),
    prj_sourceEphemeris: '',
    prj_sourceName: ['', Validators.required],
    prj_sourceVelocity: this.formBuilder.group({
      val_centerVelocity: this.formBuilder.group({
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
    this.persistenceService.loadedGoal
      .subscribe(result => {
        const targetParams = result.prj_TargetParameters[index];
        this.form.patchValue({
          prj_ExpectedProperties: {
            prj_expectedPeakFluxDensity: targetParams.prj_ExpectedProperties.prj_expectedPeakFluxDensity,
            prj_desiredCircularPolarizationPercentage: targetParams.prj_ExpectedProperties.prj_desiredCircularPolarizationPercentage,
            prj_expectedPeakLineFluxDensity: targetParams.prj_ExpectedProperties.prj_expectedPeakLineFluxDensity,
            prj_expectedLineWidth: targetParams.prj_ExpectedProperties.prj_expectedLineWidth,
            prj_desiredLinePolarizationPercentage: targetParams.prj_ExpectedProperties.prj_desiredLinePolarizationPercentage
          },
          type: targetParams.type,
          prj_sourceName: targetParams.prj_sourceName,
          solarSystemObject: targetParams.solarSystemObject,
          prj_radialVelocityReferenceSystem: targetParams.prj_sourceVelocity.referenceSystem,
          prj_sourceCoordinates: {
            system: targetParams.prj_sourceCoordinates.system,
            type: targetParams.prj_sourceCoordinates.type,
            val_longitude: targetParams.prj_sourceCoordinates.val_longitude,
            val_latitude: targetParams.prj_sourceCoordinates.val_latitude,
          },
          prj_parallax: targetParams.prj_parallax,
          prj_sourceVelocity: {
            val_centerVelocity: targetParams.prj_sourceVelocity.val_centerVelocity,
            dopplerCalcType: targetParams.prj_sourceVelocity.dopplerCalcType,
            referenceSystem: targetParams.prj_sourceVelocity.referenceSystem,
            redshift: SourceComponent.getRedshift(Object.assign(new Speed,
              targetParams.prj_sourceVelocity.val_centerVelocity),
              targetParams.prj_sourceVelocity.dopplerCalcType)
          },
          prj_pmRA: targetParams.prj_pmRA,
          prj_pmDec: targetParams.prj_pmDec,
        });
        // this.setSinglePoint(targetParams.prj_SinglePoint);
      });

  }

  setSinglePoint(points: SinglePoint[]) {
    const formGroups = points.map(point => this.formBuilder.group({
      prj_name: point.prj_name,
      prj_centre: this.formBuilder.group({
        system: point.prj_centre.system,
        type: point.prj_centre.type,
        val_longitude: this.formBuilder.group({
          unit: point.prj_centre.val_longitude.unit,
          content: [point.prj_centre.val_longitude.content, Validators.required]
        }),
        val_latitude: this.formBuilder.group({
          unit: point.prj_centre.val_latitude.unit,
          content: [point.prj_centre.val_latitude.content, Validators.required]
        }),
        val_fieldName: point.prj_centre.val_fieldName
      })
    }));
    const singlePointFormArray = this.formBuilder.array(formGroups);
    this.form.setControl('prj_SinglePoint', singlePointFormArray);
  }

  observeFormChanges() {
    const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      if (this.form.dirty && this.form.valid) {
        this.persistenceService.updateTargetParams(value).subscribe(() => {
        });
      }
    });
  }

}
