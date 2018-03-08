import {Component} from '@angular/core';
import {SuiPopupConfig} from 'ng2-semantic-ui';

/**
 * Handles the field setup page of a science goal
 */

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css']
})

export class FieldSetupComponent {

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
          if (targetParams.type === 'F_MultiplePoints') {
            this.setSinglePoint(targetParams.SinglePoint);
          } else {
            this.fieldCentreCoordinatesForm.setControl('pointings', this.formBuilder.group({
              name: '',
              centre: this.formBuilder.group({}),
              pALong: this.formBuilder.group({unit: '', content: 0.0}),
              long: this.formBuilder.group({unit: '', content: 0.0}),
              short: this.formBuilder.group({unit: '', content: 0.0}),
              spacing: this.formBuilder.group({unit: '', userUnit: '', content: 0.0}),
              referenceFrequency: this.formBuilder.group({unit: '', content: 0.0})
            }))
          }
        });
  }

  setSinglePoint(points: SinglePoint[]) {
    const formGroups           = points.map(point => this.formBuilder.group({
      name: point.name,
      centre: this.formBuilder.group({
        longitude: this.formBuilder.group({unit: point.centre.longitude.unit, content: point.centre.longitude.content}),
        latitude: this.formBuilder.group({unit: point.centre.latitude.unit, content: point.centre.latitude.content}),
        fieldName: point.centre.fieldName
      })
    }));
    const singlePointFormArray = this.formBuilder.array(formGroups);
    this.fieldCentreCoordinatesForm.setControl('pointings', singlePointFormArray);
  }

  observeFormChanges() {
    const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    debounce.subscribe(value => {
      console.log(value);
    });
  }

}
