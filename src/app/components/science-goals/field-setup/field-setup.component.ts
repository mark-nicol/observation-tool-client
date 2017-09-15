import {Component} from '@angular/core';
import {ScienceGoalPage} from "../../../models/science-goal-page";
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css'],
  providers: [ScienceGoalPanelService]
})

export class FieldSetupComponent extends ScienceGoalPage{

  tableHeaders: string[];
  panel: any;

  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService, 'fieldSetup');
  }

  // hiddenChange(event) {
  //   this.scienceGoalPanelService.hiddenChange('fieldSetup', event);
  // }

  setHeaders(headers: string[]) {
    this.tableHeaders = headers;
  }

}
