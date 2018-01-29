import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Component to send control changes to the spectral visualisation
 *
 * Manages showing and hiding of elements, changes of column density, button clicks
 */

@Component({
  selector: 'app-visualisation-control',
  templateUrl: './visualisation-control.component.html',
  styleUrls: ['./visualisation-control.component.scss']
})
export class VisualisationControlComponent {

  /** Bool for the receiver bands checkbox */
  bandsChecked                         = true;
  /** Bool for the transmission line checkbox */
  transmissionChecked                  = true;
  /** Emitter for the receiver bands checkbox */
  @Output() bandsCheckedEmitter        = new EventEmitter<boolean>();
  /** Emitter for the transmission line checkbox */
  @Output() transmissionCheckedEmitter = new EventEmitter<boolean>();
  /** Emitter for the column density choice radios */
  @Output() densityRadioEmitter        = new EventEmitter<string>();
  /** Emitter for the manual column density selection */
  @Output() densitySelectorEmitter     = new EventEmitter<number>();
  /** Emitter for the reset view button */
  @Output() resetEmitter               = new EventEmitter();
  /** Current density radio choice */
  densityRadioChoice                   = 'automatic';
  /** Strings for the density selector, content is index from the ngFor */

  columnDensityChoices                 = [
    '0.472mm (1st Octile)',
    '0.658mm (2nd Octile)',
    '0.913mm (3rd Octile)',
    '1.262mm (4th Octile)',
    '1.796mm (5th Octile)',
    '2.748mm (6th Octile)',
    '5.186mm (7th Octile)',
  ];

  /**
   * Flips the bool of the bands checkbox and emits
   */
  bandsCheckedChange() {
    this.bandsCheckedEmitter.emit(this.bandsChecked);
  }

  /**
   * Flips the bool of the transmission checkbox and emits
   */
  transmissionCheckedChange() {
    this.transmissionCheckedEmitter.emit(this.transmissionChecked);
  }

  /**
   * Sets the density radio choice and emits
   */
  densityRadioChange() {
    this.densityRadioEmitter.emit(this.densityRadioChoice);
  }

  /**
   * Emits the newly chosen density from the selector
   * @param newDensity The new density octile to use
   */
  densitySelectorChange(newDensity: string) {
    this.densitySelectorEmitter.emit(this.columnDensityChoices.indexOf(newDensity) + 1);
  }

  /**
   * Emits a signal when the reset view button is clicked
   */
  resetClick() {
    this.resetEmitter.emit();
  }

}
