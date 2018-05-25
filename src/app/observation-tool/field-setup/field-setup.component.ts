import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SuiPopupConfig} from 'ng2-semantic-ui';
import {Observable} from 'rxjs/Rx';
import {ProjectService} from '../shared/services/project.service';
import {SourceComponent} from './components/source/source.component';
import {Speed} from '../../units/classes/speed';
import {ISinglePoint} from '../shared/interfaces/apdm/single-point.interface';

/**
 * Handles the field setup page of a science goal
 */

/* TODO Fix form to match model
 * Is there a way to make forms from interfaces
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
    prj_Rectangle: this.formBuilder.group({
      prj_centre: this.formBuilder.group({
        system: '',
        type: '',
        val_fieldName: '',
        val_latitude: this.formBuilder.group({unit: '', content: 0.0}),
        val_longitude: this.formBuilder.group({unit: '', content: 0.0})
      }),
      prj_long: this.formBuilder.group({unit: '', content: 0.0}),
      prj_name: '',
      prj_pALong: this.formBuilder.group({unit: '', content: 0.0}),
      prj_referenceFrequency: this.formBuilder.group({unit: '', content: 0.0}),
      prj_short: this.formBuilder.group({unit: '', content: 0.0}),
      prj_spacing: this.formBuilder.group({userUnit: '', unit: '', content: 0.0})
    }),
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
              private persistenceService: ProjectService,
              private activatedRoute: ActivatedRoute) {
    this.config.delay = 1000;
  }

  ngOnInit() {
    this.persistenceService.currentTarget.subscribe(result => {
      this.currentTarget = result;
      this.initForm(result)
    });
    this.observeFormChanges();
  }

  initForm(index: number) {
    this.persistenceService.loadedGoal
      .subscribe(result => {
        if (result.targetParameters[index]) {
          const targetParams = result.targetParameters[index];
          this.form.patchValue({
            prj_ExpectedProperties: {
              prj_expectedPeakFluxDensity: targetParams.expectedProperties.expectedPeakFluxDensity,
              prj_desiredCircularPolarizationPercentage: targetParams.expectedProperties.desiredCircularPolarizationPercentage,
              prj_expectedPeakLineFluxDensity: targetParams.expectedProperties.expectedPeakLineFluxDensity,
              prj_expectedLineWidth: targetParams.expectedProperties.expectedLineWidth,
              prj_desiredLinePolarizationPercentage: targetParams.expectedProperties.desiredLinePolarizationPercentage
            },
            type: targetParams.type,
            prj_sourceName: targetParams.sourceName,
            solarSystemObject: targetParams.solarSystemObject,
            prj_radialVelocityReferenceSystem: targetParams.sourceVelocity.referenceSystem,
            prj_sourceCoordinates: {
              system: targetParams.sourceCoordinates.system,
              type: targetParams.sourceCoordinates.type,
              val_longitude: targetParams.sourceCoordinates.longitude,
              val_latitude: targetParams.sourceCoordinates.latitude,
            },
            prj_parallax: targetParams.parallax,
            prj_sourceVelocity: {
              val_centerVelocity: targetParams.sourceVelocity.centerVelocity,
              dopplerCalcType: targetParams.sourceVelocity.dopplerCalcType,
              referenceSystem: targetParams.sourceVelocity.referenceSystem,
              redshift: SourceComponent.getRedshift(Object.assign(new Speed,
                targetParams.sourceVelocity.centerVelocity),
                targetParams.sourceVelocity.dopplerCalcType)
            },
            prj_pmRA: targetParams.pmRA,
            prj_pmDec: targetParams.pmDec,
          });
          // if (targetParams.fields) {
          //   this.form.patchValue({prj_Rectangle: targetParams.fields});
          // } else if (targetParams.SinglePoint) {
          //   this.setSinglePoint(targetParams.SinglePoint);
          // }
        }
      });

  }

  setSinglePoint(points: ISinglePoint[]) {
    const formGroups = points.map(point => this.formBuilder.group({
      prj_name: point.name,
      prj_centre: this.formBuilder.group({
        system: point.centre.system,
        type: point.centre.type,
        val_longitude: this.formBuilder.group({
          unit: point.centre.longitude.unit,
          content: [point.centre.longitude.content, Validators.required]
        }),
        val_latitude: this.formBuilder.group({
          unit: point.centre.latitude.unit,
          content: [point.centre.latitude.content, Validators.required]
        }),
        val_fieldName: point.centre.fieldName
      })
    }));
    const singlePointFormArray = this.formBuilder.array(formGroups);
    this.form.setControl('SinglePoint', singlePointFormArray);
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
