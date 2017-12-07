import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PrincipleInvestigatorInterface} from '../../../../shared/interfaces/principle-investigator.interface'

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
  @Input() searchResults: Observable<PrincipleInvestigatorInterface[]>;

  /** The clicked PI in the table, used for highlighting */
  selectedPi: PrincipleInvestigatorInterface;

  constructor() {
  }

  /**
   * Called when a table row is clicked. Sets a new PI in session storage.
   * @param pi The clicked PI
   */
  rowClick(pi: PrincipleInvestigatorInterface) {
    this.selectedPi = this.selectedPi === pi ? null : pi;
    sessionStorage.setItem('selectedPi', JSON.stringify(this.selectedPi));
  }

}
