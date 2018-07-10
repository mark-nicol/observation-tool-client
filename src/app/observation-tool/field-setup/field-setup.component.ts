import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SuiPopupConfig} from 'ng2-semantic-ui';
import {Observable} from 'rxjs/Rx';
import {ProjectService} from '../shared/services/project.service';
import {IScienceGoal} from '../shared/interfaces/apdm/science-goal.interface';
import {IField} from '../shared/interfaces/apdm/field.interface';
import {IRectangle} from '../shared/interfaces/apdm/rectangle.interface';
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
    expectedProperties: this.formBuilder.group({
      expectedPeakFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
      desiredCircularPolarizationPercentage: 0.0,
      expectedPeakLineFluxDensity: this.formBuilder.group({unit: '', content: 0.0}),
      expectedLineWidth: this.formBuilder.group({userUnit: '', content: 0.0}),
      desiredLinePolarizationPercentage: 0.0
    }),
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
    fields: this.formBuilder.array([])
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
    this.persistenceService.loadedGoal.subscribe((result: IScienceGoal) => {
      if (result.targetParameters[index]) {
        const targetParams = result.targetParameters[index];
        this.form.patchValue(targetParams);
        this.setFields(targetParams.fields);
      }
    });

  }

  setFields(fields: IField[]) {
    let formGroups = [];
    if (this.form.getRawValue().type === 'F_SingleRectangle') {
      formGroups = fields.map((point: IRectangle) => this.formBuilder.group({
        name: point.name,
        centre: this.formBuilder.group({
          system: point.centre.system,
          type: point.centre.type,
          longitude: this.formBuilder.group({
            unit: point.centre.longitude.unit,
            content: [point.centre.longitude.content, Validators.required]
          }),
          latitude: this.formBuilder.group({
            unit: point.centre.latitude.unit,
            content: [point.centre.latitude.content, Validators.required]
          }),
          fieldName: point.centre.fieldName
        }),
        paLong: this.formBuilder.group({
          unit: point.paLong.unit,
          content: point.paLong.content
        }),
        _long: this.formBuilder.group({
          unit: point._long.unit,
          content: point._long.content
        }),
        _short: this.formBuilder.group({
          unit: point._short.unit,
          content: point._short.content
        }),
        spacing: this.formBuilder.group({
          userUnit: point.spacing.userUnit,
          unit: point.spacing.unit,
          content: point.spacing.content
        }),
        referenceFrequency: this.formBuilder.group({
          unit: point.referenceFrequency.unit,
          content: point.referenceFrequency.content
        }),
      }));
    } else if (this.form.getRawValue().type === 'F_MultiplePoints') {
      formGroups = fields.map((point: ISinglePoint) => this.formBuilder.group({
        name: point.name,
        centre: this.formBuilder.group({
          system: point.centre.system,
          type: point.centre.type,
          longitude: this.formBuilder.group({
            unit: point.centre.longitude.unit,
            content: [point.centre.longitude.content, Validators.required]
          }),
          latitude: this.formBuilder.group({
            unit: point.centre.latitude.unit,
            content: [point.centre.latitude.content, Validators.required]
          }),
          fieldName: point.centre.fieldName
        })
      }));
    }
    const fieldFormArray = this.formBuilder.array(formGroups);
    this.form.setControl('fields', fieldFormArray);
  }

  observeFormChanges() {
    const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      if (this.form.dirty && this.form.valid) {
        console.log(value);
      }
    });
  }

}
