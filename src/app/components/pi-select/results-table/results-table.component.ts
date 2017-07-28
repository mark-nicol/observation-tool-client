import {Component, OnInit} from '@angular/core';
import {PrimaryInvestigator} from "../../../models/primary-investigator"
import {PrimaryInvestigatorService} from "../../../services/primary-investigator.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  providers: [ PrimaryInvestigatorService ]
})

export class ResultsTableComponent implements OnInit {

  searchQuery: string;
  pis: any;
  searchResults: PrimaryInvestigator[];
  selectedPi: PrimaryInvestigator;

  constructor(private primaryInvestigatorService: PrimaryInvestigatorService) {
  }

  ngOnInit() {
    this.primaryInvestigatorService.getPIs().then(pis => this.pis = pis);
  }

  rowClick(pi: PrimaryInvestigator) {
    this.selectedPi = pi;
  }

}
