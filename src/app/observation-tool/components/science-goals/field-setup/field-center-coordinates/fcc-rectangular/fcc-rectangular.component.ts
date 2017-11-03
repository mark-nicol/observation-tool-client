import {Component, Input, OnChanges} from '@angular/core';
import {CoordSystem} from '../../../../../interfaces/coord-system.interface';

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
export class FccRectangularComponent implements OnChanges {

  /** The selected radio value from FieldCentreCoordinates component */
  @Input() radioValue = 'relative';

  /** The chosen coordinates system from the selector */
  chosenSystem: CoordSystem;

  /** Controls if the sexagesimal checkbox is shown in the system selector */
  sexagesimalHidden = (this.radioValue === 'relative');

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

  /**
   * Sets the visibility of the sexagesimal checkbox depending on a radio value change
   */
  ngOnChanges() {
    this.sexagesimalHidden = (this.radioValue === 'relative');
  }

  /**
   * Called when the chosen system changes in the system selector.
   * @param system The newly selected system
   */
  systemChange(system: CoordSystem) {
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
