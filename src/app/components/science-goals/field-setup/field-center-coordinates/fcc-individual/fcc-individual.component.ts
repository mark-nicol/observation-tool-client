import {Component, Input, OnInit} from '@angular/core';
import {FieldSetupService} from "../../../../../services/field-setup.service";

@Component({
  selector: 'fcc-individual',
  templateUrl: './fcc-individual.component.html',
  styleUrls: ['./fcc-individual.component.scss']
})
export class FccIndividualComponent implements OnInit {

  @Input() tableHeaders: string[] = ['', ''];
  @Input() radioValue = 'relative';
  selectedUnits = 'mas';
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];
  @Input() data: any;
  _fieldSetupService: FieldSetupService;

  constructor(private fieldSetupService: FieldSetupService) {
    this._fieldSetupService = fieldSetupService;
  }

  ngOnInit() {
    console.log(this._fieldSetupService.getItem('source', 'chosenSystem').latHeader);
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
