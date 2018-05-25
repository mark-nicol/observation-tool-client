import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    if (this.form.value.fields[0]) {
      return this.form.value.fields[0].centre.type;
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
    this.form.get('SinglePoint').patchValue(newValueArray);
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

  get offsetUnit() {
    return this.form.value.fields[0].centre.longitude.unit;
  }

  set offsetUnit(value: string) {
    const newValueArray = [];
    for (let i = 0; i < this.singlePoint.length; i++) {
      newValueArray.push({
        prj_centre: {
          val_longitude: {
            unit: value
          },
          val_latitude: {
            unit: value
          }
        }
      });
    }
    this.form.get('SinglePoint').patchValue(newValueArray);
  }

  constructor(protected systemService: SystemService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.form);
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
    return this.form.get('fields') as FormArray;
  }

  removePointing(index: number) {
    this.singlePoint.removeAt(index);
  }

  get fields(): FormArray {
    console.log(this.form.controls.fields['controls'][0]);
    return this.form.get('fields') as FormArray;
  }

  addPointing() {
    this.singlePoint.push(this.formBuilder.group({
      prj_name: '',
      prj_centre: this.formBuilder.group({
        val_longitude: this.formBuilder.group({
          unit: this.offsetUnit,
          content: [0.0, Validators.required]
        }),
        val_latitude: this.formBuilder.group({
          unit: this.offsetUnit,
          content: [0.0, Validators.required]
        }),
        val_fieldName: `Field-${this.singlePoint.length + 1}`
      })
    }))
  }

}
