import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PrimaryInvestigator} from '../../../../shared/interfaces/primary-investigator'

/**
 * Results table component.
 *
 * Displays search results from the PI search service
 */

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})

export class ResultsTableComponent {

  /** Search results from PI search */
  @Input() searchResults: Observable<PrimaryInvestigator[]>;
  /** True if a search is being carried out, used to hide table */
  @Input() isSearching: boolean;
  /** The clicked PI in the table, used for highlighting */
  selectedPi: PrimaryInvestigator;

  /**
   * Called when a table row is clicked. Sets a new PI in session storage.
   * @param pi The clicked PI
   */
  rowClick(pi: PrimaryInvestigator) {
    this.selectedPi = this.selectedPi === pi ? null : pi;
    sessionStorage.setItem('selectedPi', JSON.stringify(this.selectedPi));
  }

}
