import {Component} from '@angular/core';
import {ScienceGoalPanelService} from '../../../services/science-goal-panel.service';
import {ScienceGoalPage} from '../shared/classes/science-goal-page';

/**
 * Handles the field setup page of a science goal
 */

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css'],
  providers: [ScienceGoalPanelService]
})

export class FieldSetupComponent extends ScienceGoalPage {

  /** Chosen target type from the source component */
  targetType: string;

  /** Table headers for the field centre coordinates component TODO Review if used */
  tableHeaders: string[];

  /** Closed panel TODO Review use */
  panel: any;

  /**
   * Calls super
   * @param scienceGoalPanelService Passed to super for use in parent
   */
  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService, 'fieldSetup');
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
