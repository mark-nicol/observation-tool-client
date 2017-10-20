import {Component, Input, OnInit} from '@angular/core';
import {FieldSetupService} from "../../../../../services/field-setup.service";

@Component({
  selector: 'fcc-individual',
  templateUrl: './fcc-individual.component.html',
  styleUrls: ['./fcc-individual.component.scss']
})
export class FccIndividualComponent implements OnInit {

  @Input() radioValue = 'relative';
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];
  data: any;
  _fieldSetupService: FieldSetupService;

  constructor(private fieldSetupService: FieldSetupService) {
    this._fieldSetupService = fieldSetupService;
    fieldSetupService.getPageData('fieldCentreCoordinates').subscribe(res => this.data = res.individual);
  }

  ngOnInit() {
  }

  addRow() {
    this.data.rows.push({lat: '0', lon: '0'});
  }

  removeRow() {
    this.data.rows.pop();
  }

  log(message){
    console.log(message);
  }

}
