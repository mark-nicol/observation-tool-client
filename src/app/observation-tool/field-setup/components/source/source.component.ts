import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import {Speed} from '../../../../units/classes/speed';
import {TargetParameters} from '../../../shared/classes/science-goal/target-parameters';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
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

  @Input() form: FormGroup;
  @Output() resolveEmitter = new EventEmitter<number[]>();

  currentTarget               = 0;
  target: TargetParameters;
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
   * @param systemService
   * @param simbadService
   */
  constructor(protected systemService: SystemService,
              private simbadService: SimbadService) {
  }


  ngOnInit() {
    this.systemChange();
  }

  /**
   * Handles a change of system in the system selector
   * @param system The new system type to be used
   */
  systemChange() {
    this.currentSystem = this.systemService.getSystem(this.form.value.sourceCoordinates.system);
    if (this.form.value.sourceCoordinates.system === 'ICRS' ||
        this.form.value.sourceCoordinates.system === 'FK5 J2000') {
      this.sexagesimalCheckboxDisabled = false;
    } else {
      this.form.value.sourceCoordinates.type = 'RELATIVE';
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
