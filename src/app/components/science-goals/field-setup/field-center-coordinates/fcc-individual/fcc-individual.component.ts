import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fcc-individual',
  templateUrl: './fcc-individual.component.html',
  styleUrls: ['./fcc-individual.component.scss']
})
export class FccIndividualComponent implements OnInit {

  @Input() tableHeaders: string[] = ['', ''];
  @Input()
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

  constructor() { }

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
