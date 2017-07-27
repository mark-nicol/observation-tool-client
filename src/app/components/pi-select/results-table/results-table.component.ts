import { Component, OnInit } from '@angular/core';


class Primary_Investigator {
  fullName: string;
  email: string;
  affiliation: string;
  alma_id: string;
}

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  PRIMARY_INVESTIGATORS: Primary_Investigator[] = [
    {
      fullName: 'Joe Barrett',
      email: 'joe.barrett@stfc.ac.uk',
      affiliation: 'STFC',
      alma_id: 'jbarrett'
    },
    {
      fullName: 'Mark Nicol',
      email: 'mark.nicol@stfc.ac.uk',
      affiliation: 'STFC',
      alma_id: 'mnicol'
    }
  ];

  selectedPi: Primary_Investigator;

  constructor() {

  }

  ngOnInit() {
  }

  rowClick(pi: Primary_Investigator) {
    this.selectedPi = pi;
  }

}
