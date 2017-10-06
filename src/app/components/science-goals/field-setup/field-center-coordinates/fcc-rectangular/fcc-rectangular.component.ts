import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'fcc-rectangular',
  templateUrl: './fcc-rectangular.component.html',
  styleUrls: ['./fcc-rectangular.component.scss']
})
export class FccRectangularComponent implements OnInit, OnChanges {

  @Input() radioValue = 'relative';
  sexagesimalHidden = (this.radioValue === 'relative');

  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.sexagesimalHidden = (this.radioValue === 'relative');
  }

}
