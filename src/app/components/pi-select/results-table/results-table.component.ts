import {Component, OnInit} from '@angular/core';
import {PrimaryInvestigator} from "../../../models/primary-investigator"

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})

export class ResultsTableComponent implements OnInit {

  primaryInvestigators: any;
  selectedPi: PrimaryInvestigator;

  constructor() {
  }

  ngOnInit() {
  }

  rowClick(pi: PrimaryInvestigator) {
    this.selectedPi = this.selectedPi === pi ? null : pi;
    sessionStorage.setItem("selectedPi", JSON.stringify(this.selectedPi));
  }

}
