import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'field-source',
  host: {'(document:click)': 'unfocus($event)'},
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],

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
  showSourceCoords = true;
  lonInputValue: any;
  lonInputError = true;
  latInputValue: any;
  latInputError = true;
  sexagesimalUnits = false;
  chosenSystem: {
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
  } = {
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
  };

  @Output() targetTypeEmitter = new EventEmitter<string>();
  @Output() tableHeaderEmitter = new EventEmitter<string[]>();

  constructor() {
  }

  ngOnInit() {
    this.targetChange('rectangular');
  }

  unfocus(event): void {
    let active = document.activeElement;
    try {
      if (active != event.target)
        (active as HTMLElement).blur();
    } catch (TypeError) {
    }
  }

  solarCheckboxClicked() {
    this.showSourceCoords = !this.showSourceCoords;
  }

  setLatLon(value, element) {
    if (element.id == 'latInput') {
      this.latInputValue = value;
    } else {
      this.lonInputValue = value;
    }
  }

  targetChange(targetType: string) {
    this.targetTypeEmitter.emit(targetType);
  }

  sexagesimalChange(units: boolean) {
    this.sexagesimalUnits = units;
  }

  systemChange(system: any) {
    this.chosenSystem = system;
    this.tableHeaderEmitter.emit([this.chosenSystem.latHeader, this.chosenSystem.lonHeader]);
  }

}
