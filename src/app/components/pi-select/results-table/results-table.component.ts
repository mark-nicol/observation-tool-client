import {Component, OnInit} from '@angular/core';
import {PrimaryInvestigator} from "../../../models/primary-investigator"

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

  searchQuery: string;

  // PRIMARY_INVESTIGATORS: PrimaryInvestigator[] = [
  //   {
  //     title: '',
  //     name: 'Joe Barrett',
  //     affiliation: null,
  //     email: '',
  //     telephone: '',
  //     url: ''
  //   }
  // ];

  searchResults: Primary_Investigator[];
  selectedPi: Primary_Investigator;

  constructor() {
    this.searchQuery = '';
  }

  ngOnInit() {
    this.searchResults = [];
    console.log(this.searchQuery);
    for (let i = 0; i < this.PRIMARY_INVESTIGATORS.length; i++){
      console.log(this.PRIMARY_INVESTIGATORS[i]);
      if (this.PRIMARY_INVESTIGATORS[i].name.includes(this.searchQuery)){
        this.searchResults.push(this.PRIMARY_INVESTIGATORS[i]);
      }
    }
  }

  rowClick(pi: Primary_Investigator) {
    this.selectedPi = pi;
  }

}
