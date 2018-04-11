import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SinglePoint} from '../../../shared/classes/science-goal/single-point';
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
    if (this.form.value.prj_SinglePoint[0]) {
      return this.form.value.prj_SinglePoint[0].centre.type;
    }
    return this._coordType;
  }

  set coordType(value: string) {
    const newValueArray = [];
    for (let i = 0; i < this.singlePoint.length; i++) {
      newValueArray.push({
        centre: {
          type: value
        }
      });
    }
    this.form.get('prj_SinglePoint').patchValue(newValueArray);
    this._coordType = value;
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
    const newValueArray = [];
    for (let i = 0; i < this.singlePoint.length; i++) {
      newValueArray.push({
        centre: {
          longitude: {
            unit: value
          },
          latitude: {
            unit: value
          }
        }
      });
    }
    this.form.get('prj_SinglePoint').patchValue(newValueArray);
    this._offsetUnit = value;
  }

  constructor(protected systemService: SystemService,
              private formBuilder: FormBuilder) {
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
    return this.form.get('prj_SinglePoint') as FormArray;
  }

  removePointing(index: number) {
    this.singlePoint.removeAt(index);
  }

  addPointing() {
    this.singlePoint.push(this.formBuilder.group({
      name: '',
      centre: this.formBuilder.group({
        longitude: this.formBuilder.group({
          unit: this._offsetUnit,
          content: [0.0, Validators.required]
        }),
        latitude: this.formBuilder.group({
          unit: this._offsetUnit,
          content: [0.0, Validators.required]
        }),
        fieldName: `Field-${this.singlePoint.length + 1}`
      })
    }))
  }

}
