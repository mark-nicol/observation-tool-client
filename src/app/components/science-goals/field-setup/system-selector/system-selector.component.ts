import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'system-selector',
  templateUrl: './system-selector.component.html',
  styleUrls: ['./system-selector.component.scss']
})
export class SystemSelectorComponent implements OnInit {

  sexagesimalDisabled = false;
  systemKeys = Object.keys;
  systems: {
    [id: string]: {
      sexagesimalLabels: {
        latLabel: string,
        lonLabel: string
      },
      normalLabels: {
        latLabel: string,
        lonLabel: string
      },
      latPlaceholder: string,
      lonPlaceholder: string,
      lonHeader: string,
      latHeader: string
    }
  } = {
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
  chosenSystem = 'ICRS';
  sexagesimalUnits = false;
  @Output() systemEmitter = new EventEmitter<{
    sexagesimalLabels: {
      latLabel: string,
      lonLabel: string
    },
    normalLabels: {
      latLabel: string,
      lonLabel: string
    },
    latPlaceholder: string,
    lonPlaceholder: string,
    lonHeader: string,
    latHeader: string
  }>();
  @Output() sexagesimalEmitter = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.systemEmitter.emit(this.systems[this.chosenSystem]);
    this.sexagesimalEmitter.emit(this.sexagesimalUnits);
  }

  systemChange() {
    if (this.chosenSystem == 'ICRS' || this.chosenSystem == 'FK5 J2000') {
      this.sexagesimalDisabled = false;
    } else {
      this.sexagesimalDisabled = true;
      this.sexagesimalUnits = false;
    }
    this.systemEmitter.emit(this.systems[this.chosenSystem]);
    this.sexagesimalEmitter.emit(this.sexagesimalUnits);
  }

  sexagesimalChange() {
    this.sexagesimalEmitter.emit(this.sexagesimalUnits);
  }

}
