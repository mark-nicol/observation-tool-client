import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Speed} from '../../../../units/classes/speed';
import {SpeedUnits} from '../../../../units/enums/speed-units.enum';
import {AbstractForm} from '../../../shared/classes/abstract-form';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {SimbadService} from '../../../shared/services/simbad.service';
import {SystemService} from '../../../shared/services/system.service';

/**
 * Source Component in Field Setup
 *
 * Allows for selecting a sky source
 */

@Component({
  selector: 'field-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SourceComponent extends AbstractForm implements OnInit {

  @Output() resolveEmitter = new EventEmitter<number[]>();

  currentTarget               = 0;
  /** Selectable solar system bodies for selection box */
  solarBodies                 = [
    'Mercury',
    'Venus',
    'Moon',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto',
    'Sun',
    'Ganymede',
    'Europa',
    'Callisto',
    'Io',
    'Titan',
    'Ceres',
    'Pallas',
    'Juno',
    'Vesta',
    'Ephemeris'
  ];
  currentSystem: CoordSystemInterface;
  sexagesimalCheckboxDisabled = false;

  static getRedshift(centerVelocity: Speed, dopplerType: string): number {
    const voc = centerVelocity.getValueInUnits(SpeedUnits.M_S) / Speed.C;
    switch (dopplerType) {
      case 'RELATIVISTIC':
        return Math.sqrt((1.0 + voc) / (1.0 - voc)) - 1;
      case 'OPTICAL':
        return voc;
      case 'RADIO':
        return voc / (1.0 - voc);
    }
  }

  /**
   * Retrieves data from service
   * @param persistenceService Injected service
   * @param formBuilder
   * @param systemService
   * @param simbadService
   * @param activatedRoute
   */
  constructor(private persistenceService: PersistenceService,
              private formBuilder: FormBuilder,
              protected systemService: SystemService,
              private simbadService: SimbadService,
              private activatedRoute: ActivatedRoute) {
    super();
    this.form = this.formBuilder.group({
      sourceName: ['', Validators.required],
      solarSystemObject: false,
      sourceCoordinates: this.formBuilder.group({
        system: '',
        type: true,
        longitude: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        latitude: this.formBuilder.group({
          unit: '',
          content: 0.0
        })
      }),
      parallax: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      sourceVelocity: this.formBuilder.group({
        centerVelocity: this.formBuilder.group({
          unit: '',
          content: 0.0
        }),
        dopplerCalcType: '',
        referenceSystem: '',
        redshift: 0
      }),
      pmRA: this.formBuilder.group({
        unit: '',
        content: 0.0
      }),
      pmDec: this.formBuilder.group({
        unit: '',
        content: 0.0
      })
    });
    super.onFormChanges();
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentTarget = params.index ? params.index : this.persistenceService.currentTarget;
      this.initComponent(this.currentTarget);
    });
    // this.initComponent(this.currentTarget);
  }


  initComponent(index: number) {
    this.persistenceService.getScienceGoal()
        .subscribe(result => {
          const targetParams = result.TargetParameters[index];
          this.data          = targetParams;
          this.form.patchValue({
            sourceName: targetParams.sourceName,
            solarSystemObject: targetParams.solarSystemObject !== 'Unspecified',
            radialVelocityReferenceSystem: targetParams.sourceVelocity.referenceSystem,
            sourceCoordinates: {
              system: targetParams.sourceCoordinates.system,
              type: targetParams.sourceCoordinates.type === 'ABSOLUTE',
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
            pmDec: targetParams.pmDec
          });
          this.systemChange();
          this.resolveEmitter.emit([
            this.form.value.sourceCoordinates.longitude.content,
            this.form.value.sourceCoordinates.latitude.content
          ]);
        });
  }

  /**
   * Controls a change of target type
   * @param targetType The new target type to be set
   */
  targetChange(targetType: string) {
  }

  /**
   * Handles a change of system in the system selector
   */
  systemChange() {
    this.currentSystem = this.systemService.getSystem(this.form.value.sourceCoordinates.system);
    if (this.form.value.sourceCoordinates.system === 'ICRS' || this.form.value.sourceCoordinates.system === 'FK5 J2000') {
      this.sexagesimalCheckboxDisabled = false;
    } else {
      this.form.value.sourceCoordinates.type = false;
      this.sexagesimalCheckboxDisabled       = true;
    }
  }

  setRedshift() {
    this.form.patchValue({
      sourceVelocity: {
        redshift: SourceComponent.getRedshift(Object.assign(new Speed,
          this.form.value.sourceVelocity.centerVelocity.content),
          this.form.value.sourceVelocity.dopplerCalcType)
      }
    });
  }

  resolveSource() {
    this.simbadService.queryByIdentifier(this.form.value.sourceName).subscribe(
      result => {
        const data = SimbadService.cleanResponse(result);
        this.form.patchValue(data);
        this.resolveEmitter.emit([
          data.sourceCoordinates.longitude.content,
          data.sourceCoordinates.latitude.content
        ]);
      },
      error => console.log('error')
    );
  }

  get sourceName() {
    return this.form.get('sourceName')
  }

}
