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
  panel: any;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
    this.scienceGoalPanelService.getPage('fieldSetup').subscribe(data => this.panel = data);
  }

  ngOnInit() {
  }

  hiddenChange(event) {
    this.scienceGoalPanelService.hiddenChange('fieldSetup', event);
  }

  showPanel(key: string) {
    if (this.panel[key].shown === false)
      this.panel[key].shown = true;
  }

  setHeaders(headers: string[]) {
    this.tableHeaders = headers;
  }

}
