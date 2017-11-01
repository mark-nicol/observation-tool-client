import {Component, OnInit} from '@angular/core';
import {SourceComponentInterface} from '../../../../models/source.interface';
import {FieldSetupService} from '../../../../services/field-setup.service';

@Component({
  selector: 'field-source',
  host: {'(document:click)': 'unfocus($event)'},
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
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

  // @Output() targetTypeEmitter = new EventEmitter<string>();
  // @Output() tableHeaderEmitter = new EventEmitter<string[]>();

  constructor(private fieldSetupService: FieldSetupService) {
    fieldSetupService.getPageData('source').subscribe(data => this.pageData = data);
  }

  ngOnInit() {
  }

  unfocus(event): void {
    const active = document.activeElement;
    try {
      if (active !== event.target)
        (active as HTMLElement).blur();
    } catch (TypeError) {
    }
  }

  solarCheckboxClicked() {
    this.pageData.solarSystemObject = !this.pageData.solarSystemObject;
  }

  setLatLon(value, element) {
    if (element.id === 'latInput') {
      this.pageData.lat.value = value;
    } else {
      this.pageData.lon.value = value;
    }
  }

  targetChange(targetType: string) {
    this.pageData.targetType = targetType;
  }

  sexagesimalChange(units: boolean) {
    this.pageData.sexagesimalUnits = units;
  }

  systemChange(system: any) {
    this.pageData.chosenSystem = system;
  }

}
