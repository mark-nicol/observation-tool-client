import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {SystemService} from '../../../shared/services/system.service';

/**
 * Handles the Field Centre Coordinates component in the Field Setup
 */

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css'],
})
export class FieldCenterCoordinatesComponent implements OnInit {

  @Input() form: FormGroup;

  /** The selected radio content from FieldCentreCoordinates component */
  @Input() radioValue = 'relative';

  _coordType = 'ABSOLUTE';

  get coordType() {
    return this._coordType;
  }

  set coordType(value: string) {
    this._coordType = value;
    console.log(this._coordType);
  }

  /** Controls if the sexagesimal checkbox is shown in the system selector */
  sexagesimalHidden = (this.radioValue === 'relative');
  /** The chosen coordinates system from the selector */
  chosenSystem: CoordSystemInterface;
  /** True if the sexagesimal checkbox is selected */
  sexagesimalUnits: boolean;

  /** Units for the offset selection box */
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  _offsetUnit = this.offsetUnits[1];

  get offsetUnit() {
    return this._offsetUnit;
  }

  set offsetUnit(value: string) {
    this._offsetUnit = value;
    console.log(this._offsetUnit);
  }

  constructor(protected systemService: SystemService) {
  }

  ngOnInit() {
    this.chosenSystem = this.systemService.getSystem(this.form.value.chosenSystem);
  }

  /**
   * Called when the chosen system changes in the system selector.
   * @param system The newly selected system
   */
  systemChange(system: CoordSystemInterface) {
    this.chosenSystem = system;
  }

  get singlePoint(): FormArray {
    return this.form.get('SinglePoint') as FormArray;
  }

  change() {
    console.log('change');
  }

}
