import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'field-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  solarBodies = [
    '',
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

  sexagesimalEnabled = true;
  systemKeys = Object.keys;
  systems: {
    [id: string]: {
      sexagesimalLabels: {
        latLabel: string,
        longLabel: string,
        latPlaceholder: string,
        longPlaceholder: string
      },
      normalLabels: {
        latLabel: string,
        longLabel: string,
        latPlaceholder: string,
        longPlaceholder: string
      },
      tableHeaders: {
        longHeader: string,
        latHeader: string
      }

    }
  } = {
    'ICRS': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        longLabel: 'RA',
        latPlaceholder: '00:00:00.000',
        longPlaceholder: '00:00:00.000'
      },
      normalLabels: {
        latLabel: 'Dec (deg)',
        longLabel: 'RA (deg)',
        latPlaceholder: '0.00000',
        longPlaceholder: '0.00000'
      },
      tableHeaders: {
        longHeader: 'RA',
        latHeader: 'Dec'
      }
    },
    'FK5 J2000': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        longLabel: 'RA',
        latPlaceholder: '00:00:00.000',
        longPlaceholder: '00:00:00.000'
      },
      normalLabels: {
        latLabel: 'Deg (deg)',
        longLabel: 'RA (deg)',
        latPlaceholder: '0.00000',
        longPlaceholder: '0.00000'
      },
      tableHeaders: {
        longHeader: 'RA',
        latHeader: 'Dec'
      }
    },
    'galactic': {
      sexagesimalLabels: {
        latLabel: '',
        longLabel: '',
        latPlaceholder: '',
        longPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Lat (deg)',
        longLabel: 'Lon (deg)',
        latPlaceholder: '-60.18855219',
        longPlaceholder: '96.33728304'
      },
      tableHeaders: {
        longHeader: 'Lon',
        latHeader: 'Lat'
      }
    },
    'eliptic': {
      sexagesimalLabels: {
        latLabel: '',
        longLabel: '',
        latPlaceholder: '',
        longPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Lat (deg)',
        longLabel: 'Lon (deg)',
        latPlaceholder: '0.000000',
        longPlaceholder: '0.000000'
      },
      tableHeaders: {
        longHeader: 'RA',
        latHeader: 'Deg'
      }
    },
    'horizon': {
      sexagesimalLabels: {
        latLabel: '',
        longLabel: '',
        latPlaceholder: '',
        longPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Alt (deg)',
        longLabel: 'Az (deg)',
        latPlaceholder: '0.000000',
        longPlaceholder: '0.000000'
      },
      tableHeaders: {
        longHeader: 'RA',
        latHeader: 'Deg'
      }
    },
    'azel': {
      sexagesimalLabels: {
        latLabel: '',
        longLabel: '',
        latPlaceholder: '',
        longPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Alt (deg)',
        longLabel: 'Az (deg)',
        latPlaceholder: '0.000000',
        longPlaceholder: '0.000000'
      },
      tableHeaders: {
        longHeader: 'RA',
        latHeader: 'Deg'
      }
    }
  };
  chosenSystem = 'ICRS';

  showSourceCoords = true;
  sexagesimalUnits = false;

  latLongSystemChosen = false;


  constructor() {
  }

  ngOnInit() {
  }

  solarCheckboxClicked() {
    this.showSourceCoords = !this.showSourceCoords;
  }

  sexagesimalCheckboxClicked() {
    this.sexagesimalUnits = !this.sexagesimalUnits;
    console.log(this.chosenSystem, this.sexagesimalUnits);
  }

  systemChange() {
    console.log(this.chosenSystem, this.sexagesimalUnits);
  }

}
