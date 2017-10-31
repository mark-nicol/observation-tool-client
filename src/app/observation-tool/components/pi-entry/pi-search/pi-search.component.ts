import {Component, OnInit} from '@angular/core';
import {PrimaryInvestigator} from '../../../interfaces/primary-investigator';

/**
 * Initial PI search component
 */

@Component({
  selector: 'app-pi-search',
  templateUrl: './pi-search.component.html',
  styleUrls: ['./pi-search.component.css']
})

export class PiSearchComponent implements OnInit {

  /** Placeholder for the search input */
  INPUT_PLACEHOLDER = 'Enter Principle Investigator name';

  /** The chosen PI passed back from piSelect */
  passedPi: PrimaryInvestigator;

  /**
   * Checks for a chosen PI in session storage and sets if available
   */
  ngOnInit() {
    if (sessionStorage['selectedPi']) {
      this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    }
  }
}
