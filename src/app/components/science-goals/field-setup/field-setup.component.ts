import {Component} from '@angular/core';
import {ScienceGoalPageComponent} from "../science-goal-page/science-goal-page.component";
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css'],
  providers: [ScienceGoalPanelService]
})

export class FieldSetupComponent extends ScienceGoalPageComponent{

  tableHeaders: string[];
  panel: any;

  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService);
  }

  // hiddenChange(event) {
  //   this.scienceGoalPanelService.hiddenChange('fieldSetup', event);
  // }

  setHeaders(headers: string[]) {
    this.tableHeaders = headers;
  }

}
