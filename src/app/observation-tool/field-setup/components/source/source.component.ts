import {Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Speed} from '../../../../units/classes/speed';
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
export class SourceComponent implements OnInit {

  @Output() resolveEmitter = new EventEmitter<number[]>();

  currentTarget = 0;
  sourceForm: FormGroup;
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
    const voc = centerVelocity.getValueInUnits('m/s') / Speed.C;
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
    this.sourceForm = this.formBuilder.group({
      sourceName: '',
      solarSystemObject: false,
      chosenSolarObject: '',
      chosenSystem: '',
      sexagesimalUnits: true,
      latValue: 0.0,
      lonValue: 0.0,
      parallaxUnit: '',
      parallaxValue: 0.0,
      properMotionCrossUnit: '',
      properMotionCrossValue: 0.0,
      properMotionDeclinationUnit: '',
      properMotionDeclinationValue: 0.0,
      radialVelocityUnit: '',
      radialVelocityValue: 0.0,
      radialVelocityReferenceSystem: '',
      dopplerType: '',
      redshift: 0,
    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentTarget = params.index ? params.index : this.persistenceService.currentTarget;
      this.initComponent(this.currentTarget);
    });
    this.initComponent(this.currentTarget);
  }


  initComponent(index: number) {
    this.persistenceService.getScienceGoal()
        .subscribe(result => {
          const targetParams = result.TargetParameters[index];
          this.sourceForm.patchValue({
            sourceName: targetParams.sourceName,
            solarSystemObject: targetParams.solarSystemObject !== 'Unspecified',
            // chosenSolarObject: result.chosenSolarObject,
            radialVelocityReferenceSystem: targetParams.sourceVelocity.referenceSystem,
            sexagesimalUnits: targetParams.sourceCoordinates.type === 'ABSOLUTE',
            chosenSystem: targetParams.sourceCoordinates.system,
            latValue: targetParams.sourceCoordinates.latitude.content,
            lonValue: targetParams.sourceCoordinates.longitude.content,
            parallaxUnit: targetParams.parallax.unit,
            parallaxValue: targetParams.parallax.content,
            properMotionCrossUnit: targetParams.pmRA.unit,
            properMotionCrossValue: targetParams.pmRA.content,
            properMotionDeclinationUnit: targetParams.pmDec.unit,
            properMotionDeclinationValue: targetParams.pmDec.content,
            radialVelocityUnit: targetParams.sourceVelocity.centerVelocity.unit,
            radialVelocityValue: targetParams.sourceVelocity.centerVelocity.content,
            dopplerType: targetParams.sourceVelocity.dopplerCalcType,
            redshift: SourceComponent.getRedshift(Object.assign(new Speed,
              targetParams.sourceVelocity.centerVelocity),
              targetParams.sourceVelocity.dopplerCalcType),
          });
          this.systemChange();
          this.resolveEmitter.emit([this.sourceForm.value.lonValue, this.sourceForm.value.latValue]);
        });
  }


  /**
   * Removes focus from the currently focused DOM element when clicked out
   */


  /**
   * Changes use of a solar system object, hides most of the component from use
   */
  solarCheckboxClicked() {
  }

  /**
   * Sets the lat and lon page values from input boxes
   * @param value   The content to set lat/lon to
   * @param element The id of element initiating the change
   */
  setLatLon(value: number, element: Element) {
    if (element.id === 'latInput') {
    } else {
    }
  }

  /**
   * Controls a change of target type
   * @param targetType The new target type to be set
   */
  targetChange(targetType: string) {
  }

  /**
   * Handles a change of the sexagesimal checkbox in the system selector
   * @param units True if checkbox is selected
   */
  sexagesimalChange() {
    console.log(this.sourceForm.value);
  }

  /**
   * Handles a change of system in the system selector
   * @param system The new system type to be used
   */
  systemChange() {
    this.currentSystem = this.systemService.getSystem(this.sourceForm.value.chosenSystem);
    if (this.sourceForm.value.chosenSystem === 'ICRS' || this.sourceForm.value.chosenSystem === 'FK5 J2000') {
      this.sexagesimalCheckboxDisabled = false;
    } else {
      this.sourceForm.value.sexagesimalUnits = false;
      this.sexagesimalCheckboxDisabled       = true;
    }
  }

  setRedshift() {
    this.sourceForm.patchValue({
      redshift: SourceComponent.getRedshift(
        new Speed(this.sourceForm.value.radialVelocityUnit,
          this.sourceForm.value.radialVelocityValue),
        this.sourceForm.value.dopplerType)
    });
  }

  resolveSource() {
    this.simbadService.queryByIdentifier(this.sourceForm.value.sourceName).subscribe(result => {
      const data = SimbadService.cleanResponse(result);
      this.sourceForm.patchValue(data);
      this.resolveEmitter.emit([data.lonValue, data.latValue]);
    });
  }

}
