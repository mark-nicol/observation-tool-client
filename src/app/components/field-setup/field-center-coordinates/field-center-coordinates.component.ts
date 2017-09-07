import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css'],
})
export class FieldCenterCoordinatesComponent implements OnInit {


  @Input() tableHeaders: string[] = ['', ''];
  radioValue = 'relative';
  rows = [
    {
      lat: '0',
      lon: '0'
    }
  ];

  selectedUnits = 'mas';
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addRow() {
    this.rows.push({lat: '0', lon: '0'});
  }

  removeRow() {
    this.rows.pop();
  }

  log(message){
    console.log(message);
  }

}
