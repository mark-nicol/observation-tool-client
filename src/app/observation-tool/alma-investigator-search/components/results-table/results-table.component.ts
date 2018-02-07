import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IAlmaInvestigator} from '../../../shared/interfaces/alma-investigator.interface';

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
  @Input() searchResults: Observable<IAlmaInvestigator[]>;

  /** The clicked PI in the table, used for highlighting */
  selectedPi: IAlmaInvestigator;

  constructor() {
  }

  /**
   * Called when a table row is clicked. Sets a new PI in session storage.
   * @param pi The clicked PI
   */
  rowClick(pi: IAlmaInvestigator) {
    this.selectedPi = this.selectedPi === pi ? null : pi;
    sessionStorage.setItem('selectedPi', JSON.stringify(this.selectedPi));
  }

}