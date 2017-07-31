import {Component, OnInit} from '@angular/core';
import {PrimaryInvestigator} from "../../../models/primary-investigator"
import {PrimaryInvestigatorService} from "../../../services/primary-investigator.service";

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  providers: [PrimaryInvestigatorService]
})

export class ResultsTableComponent implements OnInit {

  searchQuery: string;
  primaryInvestigators: any;
  selectedPi: PrimaryInvestigator;

  constructor(private primaryInvestigatorService: PrimaryInvestigatorService) {
  }

  ngOnInit() {
    this.primaryInvestigatorService.search('name', this.searchQuery)
      .then(pis => this.primaryInvestigators = pis);
  }

  rowClick(pi: PrimaryInvestigator) {
    this.selectedPi = this.selectedPi === pi ? null : pi;
    sessionStorage.setItem("selectedPi", JSON.stringify(this.selectedPi));
  }

}
