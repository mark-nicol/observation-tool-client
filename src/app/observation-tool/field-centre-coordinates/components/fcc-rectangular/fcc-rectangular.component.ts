import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CoordSystemInterface} from '../../../shared/interfaces/coord-system.interface';
import {SystemService} from '../../../shared/services/system.service';

/**
 * Field Centre Coordinates component
 *
 * Shows when single rectangular is selected in source component
 */

@Component({
             selector: 'fcc-rectangular',
             templateUrl: './fcc-rectangular.component.html',
             styleUrls: ['./fcc-rectangular.component.scss']
           })
export class FccRectangularComponent implements OnInit, OnChanges {

  /** The selected radio content from FieldCentreCoordinates component */
  @Input() radioValue = 'relative';

  @Input() form: FormGroup;

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

  constructor(protected systemService: SystemService) {
  }

  ngOnInit(): void {
    this.chosenSystem = this.systemService.getSystem(this.form.value.chosenSystem);
  }

  /**
   * Sets the visibility of the sexagesimal checkbox depending on a radio content change
   */
  ngOnChanges() {
    this.sexagesimalHidden = (this.radioValue === 'relative');
  }

  /**
   * Called when the chosen system changes in the system selector.
   * @param system The newly selected system
   */
  systemChange(system: CoordSystemInterface) {
    this.chosenSystem = system;
  }

  /**
   * Called when the sexagesimal checkbox state changes, sets bool appropriately
   * @param sexagesimal True if checkbox is checked
   */
  sexagesimalChange(sexagesimal: boolean) {
    this.sexagesimalUnits = sexagesimal;
  }

}
