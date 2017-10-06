import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {FieldSetupService} from "../../../../services/field-setup.service";
import {SourceComponentInterface} from "../../../../models/source.interface";
import {CoordSystem} from "../../../../models/coord-system.interface";

@Component({
  selector: 'field-source',
  host: {'(document:click)': 'unfocus($event)'},
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],

})
export class SourceComponent implements OnInit {

  pageData: SourceComponentInterface;

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
  // showSourceCoords = true;
  // lonInputValue: any;
  // lonInputError = true;
  // latInputValue: any;
  // latInputError = true;
  // sexagesimalUnits = false;
  // chosenSystem: CoordSystem;

  @Output() targetTypeEmitter = new EventEmitter<string>();
  @Output() tableHeaderEmitter = new EventEmitter<string[]>();

  constructor(private fieldSetupService: FieldSetupService) {
    fieldSetupService.getPageData('source').subscribe(data => this.pageData = data);
  }

  ngOnInit() {
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
    this.pageData.solarSystemObject = !this.pageData.solarSystemObject;
  }

  setLatLon(value, element) {
    if (element.id == 'latInput') {
      // this.latInputValue = value;
      this.pageData.lat = value;
    } else {
      // this.lonInputValue = value;
      this.pageData.lon = value;
    }
  }

  targetChange(targetType: string) {
    this.pageData.targetType = targetType;
    // this.targetTypeEmitter.emit(targetType);
  }

  sexagesimalChange(units: boolean) {
    this.pageData.sexagesimalUnits = units;
    // this.sexagesimalUnits = units;
  }

  systemChange(system: any) {
    // this.chosenSystem = system;
    this.pageData.chosenSystem = system;
    // this.tableHeaderEmitter.emit([this.chosenSystem.latHeader, this.chosenSystem.lonHeader]);
  }

}
