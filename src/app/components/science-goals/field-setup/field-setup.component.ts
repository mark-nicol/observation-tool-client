import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css'],
  providers: [ScienceGoalPanelService]
})
export class FieldSetupComponent implements OnInit {


  tableHeaders: string[];
  panels: any;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
    this.panels = this.scienceGoalPanelService.getPage('fieldSetup');
  }

  ngOnInit() {

  }

  hiddenChange(event) {
    this.scienceGoalPanelService.hiddenChange('fieldSetup', event);
  }

  showPanel(key: string) {
    if (this.panels[key].shown === false)
      this.panels[key].shown = true;
  }

  setHeaders(headers: string[]) {
    this.tableHeaders = headers;
  }

}
