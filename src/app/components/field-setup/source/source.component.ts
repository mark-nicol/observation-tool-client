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
        lonLabel: string,
        latPlaceholder: string,
        lonPlaceholder: string
      },
      normalLabels: {
        latLabel: string,
        lonLabel: string,
        latPlaceholder: string,
        lonPlaceholder: string
      },
      tableHeaders: {
        lonHeader: string,
        latHeader: string
      }

    }
  } = {
    'ICRS': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
        latPlaceholder: '00:00:00.000',
        lonPlaceholder: '00:00:00.000'
      },
      normalLabels: {
        latLabel: 'Dec (deg)',
        lonLabel: 'RA (deg)',
        latPlaceholder: '0.00000',
        lonPlaceholder: '0.00000'
      },
      tableHeaders: {
        lonHeader: 'RA',
        latHeader: 'Dec'
      }
    },
    'FK5 J2000': {
      sexagesimalLabels: {
        latLabel: 'Dec',
        lonLabel: 'RA',
        latPlaceholder: '00:00:00.000',
        lonPlaceholder: '00:00:00.000'
      },
      normalLabels: {
        latLabel: 'Dec (deg)',
        lonLabel: 'RA (deg)',
        latPlaceholder: '0.00000',
        lonPlaceholder: '0.00000'
      },
      tableHeaders: {
        lonHeader: 'RA',
        latHeader: 'Dec'
      }
    },
    'galactic': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
        latPlaceholder: '',
        lonPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Lat (deg)',
        lonLabel: 'Lon (deg)',
        latPlaceholder: '-60.18855219',
        lonPlaceholder: '96.33728304'
      },
      tableHeaders: {
        lonHeader: 'Lon',
        latHeader: 'Lat'
      }
    },
    'eliptic': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
        latPlaceholder: '',
        lonPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Lat (deg)',
        lonLabel: 'Lon (deg)',
        latPlaceholder: '0.000000',
        lonPlaceholder: '0.000000'
      },
      tableHeaders: {
        lonHeader: 'RA',
        latHeader: 'Deg'
      }
    },
    'horizon': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
        latPlaceholder: '',
        lonPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Alt (deg)',
        lonLabel: 'Az (deg)',
        latPlaceholder: '0.000000',
        lonPlaceholder: '0.000000'
      },
      tableHeaders: {
        lonHeader: 'RA',
        latHeader: 'Deg'
      }
    },
    'azel': {
      sexagesimalLabels: {
        latLabel: '',
        lonLabel: '',
        latPlaceholder: '',
        lonPlaceholder: ''
      },
      normalLabels: {
        latLabel: 'Alt (deg)',
        lonLabel: 'Az (deg)',
        latPlaceholder: '0.000000',
        lonPlaceholder: '0.000000'
      },
      tableHeaders: {
        lonHeader: 'RA',
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
