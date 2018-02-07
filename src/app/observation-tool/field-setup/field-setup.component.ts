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

  /** Chosen target type from the source component */
  targetType: string;

  /** Table headers for the field centre coordinates component TODO Review if used */
  tableHeaders: string[];

  /** Closed panel TODO Review use */
  panel: any;

  private _resolveCoordinates: number[];

  /**
   * constructor
   * @param config             Config for the popups, used to delay showing
   */
  constructor(private config: SuiPopupConfig) {
    this.config.delay = 1000;
  }

  /**
   * Sets the table headers TODO Review if used
   * @param headers The new table headers
   */
  setHeaders(headers: string[]) {
    this.tableHeaders = headers;
  }

  /**
   * Sets the new target type TODO Review if used
   * @param targetType The new target type to use
   */
  setTargetType(targetType: string) {
    this.targetType = targetType;
  }

}
