import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoordSystem} from '../../../../classes/coord-system.interface';

/**
 * System select components
 *
 * Allows for selecting of coordinates systems and whether sexagesimal units are used
 */

@Component({
  selector: 'system-selector',
  templateUrl: './system-selector.component.html',
  styleUrls: ['./system-selector.component.scss']
})
export class SystemSelectorComponent implements OnInit {

  /** The currently selected system */
  @Input() chosenSystem = 'ICRS';

  /** Controls if the sexagesimal checkbox is hidden */
  @Input() sexagesimalHidden = false;

  /** Controls if the sexagesimal checkbox is disabled */
  sexagesimalDisabled = false;

  /** Iterator for the systems */
  systemKeys: (o) => string[] = Object.keys;

  /** Possible system choices dict */
  systems: { [id: string]: CoordSystem } = {
    'ICRS': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
      },
      normalLabels: {
        latLabel: 'Dec(deg)',
        lonLabel: 'RA(deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Dec'
    },
    'FK5 J2000': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
      },
      normalLabels: {
        latLabel: 'Dec(deg)',
        lonLabel: 'RA(deg)'
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Dec'
    },
    'galactic': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Lat(deg)',
        lonLabel: 'Lon(deg)',
      },
      latPlaceholder: '-60.18855219',
      lonPlaceholder: '96.33728304',
      lonHeader: 'Lon',
      latHeader: 'Lat',
    },
    'eliptic': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Lat (deg)',
        lonLabel: 'Lon (deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    },
    'horizon': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Alt(deg)',
        lonLabel: 'Az(deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    },
    'azel': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
      },
      normalLabels: {
        latLabel: 'Alt(deg)',
        lonLabel: 'Az(deg)',
      },
      latPlaceholder: '0',
      lonPlaceholder: '0',
      lonHeader: 'RA',
      latHeader: 'Deg'
    }
  };

  /** True if the sexagesimal checkbox is checked */
  sexagesimalUnits = false;

  /** Emitter for a selected system change */
  @Output() systemEmitter = new EventEmitter<CoordSystem>();

  /** Emitter for a sexagesimal check change */
  @Output() sexagesimalEmitter = new EventEmitter<boolean>();

  /**
   * Emits the current system and sexagesimal state
   */
  ngOnInit() {
    this.systemEmitter.emit(this.systems[this.chosenSystem]);
    this.sexagesimalEmitter.emit(this.sexagesimalUnits);
  }

  /**
   * Controls a change of system
   *
   * If the system is is ICRS or FK5 then sexagesimal units are allowed,
   * else the checkbox is disabled and hidden
   */
  systemChange() {
    if (this.chosenSystem === 'ICRS' || this.chosenSystem === 'FK5 J2000') {
      this.sexagesimalDisabled = false;
    } else {
      this.sexagesimalDisabled = true;
      this.sexagesimalUnits = false;
    }
    this.systemEmitter.emit(this.systems[this.chosenSystem]);
    this.sexagesimalEmitter.emit(this.sexagesimalUnits);
  }

  /**
   * Controls a change of the sexagesimal state
   */
  sexagesimalChange() {
    this.sexagesimalEmitter.emit(this.sexagesimalUnits);
  }

}
