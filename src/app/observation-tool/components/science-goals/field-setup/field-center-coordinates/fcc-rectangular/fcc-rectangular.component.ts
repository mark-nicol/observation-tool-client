import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CoordSystem} from "../../../../../models/coord-system.interface";

@Component({
  selector: 'fcc-rectangular',
  templateUrl: './fcc-rectangular.component.html',
  styleUrls: ['./fcc-rectangular.component.scss']
})
export class FccRectangularComponent implements OnInit, OnChanges {

  @Input() radioValue = 'relative';
  sexagesimalHidden = (this.radioValue === 'relative');
  sexagesimalUnits: boolean;
  chosenSystem: CoordSystem;

  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.chosenSystem);
  }

  ngOnChanges() {
    this.sexagesimalHidden = (this.radioValue === 'relative');
  }

  systemChange(system: CoordSystem) {
    this.chosenSystem = system;
  }

  sexagesimalChange(sexagesimal: boolean) {
    this.sexagesimalUnits = sexagesimal;
  }

}
