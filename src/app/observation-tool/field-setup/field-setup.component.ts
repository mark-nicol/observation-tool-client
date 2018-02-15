import {Component} from '@angular/core';
import {SuiPopupConfig} from 'ng2-semantic-ui';

/**
 * Handles the field setup page of a science goal
 */

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css']
})

export class FieldSetupComponent {

  get resolveCoordinates(): number[] {
    return this._resolveCoordinates;
  }

  set resolveCoordinates(value: number[]) {
    this._resolveCoordinates = value;
  }

  private _resolveCoordinates: number[];

  /**
   * constructor
   * @param config             Config for the popups, used to delay showing
   */
  constructor(private config: SuiPopupConfig) {
    this.config.delay = 1000;
  }

}
