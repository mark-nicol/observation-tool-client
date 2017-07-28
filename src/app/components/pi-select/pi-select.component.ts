import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { RefinePanelComponent } from "./refine-panel/refine-panel.component";
import 'rxjs/add/operator/switchMap';
import {ResultsTableComponent} from "./results-table/results-table.component";

@Component({
  selector: 'app-pi-select',
  templateUrl: './pi-select.component.html',
  styleUrls: ['./pi-select.component.css']
})
export class PiSelectComponent implements OnInit{

  @ViewChild(RefinePanelComponent) refinePanel: RefinePanelComponent;
  @ViewChild(ResultsTableComponent) resultsTable: ResultsTableComponent;
  name: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
    });
    this.refinePanel.name = this.name;
    this.resultsTable.searchQuery = this.name;
  }

}
