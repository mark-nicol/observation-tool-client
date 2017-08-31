import {Component, OnInit, Pipe} from '@angular/core';
import {SexagesimalPipe} from "../../../pipes/sexagesimal.pipe";

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
  showSourceCoords = true;
  sexagesimalUnits = false;
  lonInputValue: any;
  lonInputError = true;
  latInputValue: any;
  latInputError = true;

  constructor() {
  }

  ngOnInit() {
  }

  solarCheckboxClicked() {
    this.showSourceCoords = !this.showSourceCoords;
  }

  sexagesimalCheckboxClicked() {
    this.sexagesimalUnits = !this.sexagesimalUnits;
  }

  setLatLon(event, value, element) {
    if (event.keyCode == 13) {
      if (element.id == 'latInput') {
        this.latInputValue = value;
      } else {
        this.lonInputValue = value;
      }
    }

  }

  systemChange() {
    if (this.chosenSystem == 'ICRS' || this.chosenSystem == 'FK5 J2000') {
      this.sexagesimalDisabled = false;
    } else {
      this.sexagesimalDisabled = true;
      this.sexagesimalUnits = false;
    }
  }

}
