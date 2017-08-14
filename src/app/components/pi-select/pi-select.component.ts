import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {RefinePanelComponent} from "./refine-panel/refine-panel.component";
import {ResultsTableComponent} from "./results-table/results-table.component";
import {PrimaryInvestigatorService} from "../../services/primary-investigator.service";
import {PrimaryInvestigator} from "../../models/primary-investigator";

@Component({
  selector: 'app-pi-select',
  templateUrl: './pi-select.component.html',
  styleUrls: ['./pi-select.component.css']
})

export class PiSelectComponent implements OnInit{
  @ViewChild(RefinePanelComponent) refinePanel: RefinePanelComponent;
  @ViewChild(ResultsTableComponent) resultsTable: ResultsTableComponent;
  name: string;

  constructor(private route: ActivatedRoute, private piService: PrimaryInvestigatorService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['fullName'];
    });
    this.piService.search('fullName', this.name)
      .subscribe(
        data => this.resultsTable.primaryInvestigators = data.json().data as PrimaryInvestigator[]);
    this.refinePanel.name = this.name;
  }

}
