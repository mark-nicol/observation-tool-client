import {Component, Input, OnInit} from '@angular/core';
import {FieldSetupService} from "../../../../services/field-setup.service";
import {FieldCentreCoordinatesInterface} from "../../../../models/field-centre-coordinates.interface";

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css'],
})
export class FieldCenterCoordinatesComponent implements OnInit {


  // @Input() tableHeaders: string[] = ['', ''];
  // @Input() targetType: string = 'individual';
  // radioValue = 'relative';

  data: FieldCentreCoordinatesInterface;
  _fieldSetupService: FieldSetupService;

  constructor(private fieldSetupService: FieldSetupService) {
    this._fieldSetupService = fieldSetupService;
    fieldSetupService.getPageData('fieldCentreCoordinates').subscribe(res => this.data = res);
  }

  ngOnInit() {
  }

}
