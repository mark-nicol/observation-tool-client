import {Component, OnInit}   from '@angular/core';
import {PrimaryInvestigator} from '../../../models/primary-investigator';

@Component({
  selector: 'app-pi-search',
  templateUrl: './pi-search.component.html',
  styleUrls: ['./pi-search.component.css']
})

export class PiSearchComponent implements OnInit {

  INPUT_PLACEHOLDER = 'Enter Principle Investigator name';
  passedPi: PrimaryInvestigator;

  constructor() {
  }

  ngOnInit() {
    if (sessionStorage['selectedPi']) {
      this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    }
  }
}
