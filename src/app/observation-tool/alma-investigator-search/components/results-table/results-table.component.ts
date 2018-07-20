import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IAlmaInvestigator} from '../../../shared/interfaces/alma-investigator.interface';
import {AlmaInvestigatorSearchService} from '../../services/alma-investigator-search.service';

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

export class ResultsTableComponent implements OnInit {

  /** Search results from PI search */
  @Input() searchResults: Observable<IAlmaInvestigator[]>;

  /** The clicked PI in the table, used for highlighting */
  selectedPi: IAlmaInvestigator;
  @Output() newPiEmitter = new EventEmitter<IAlmaInvestigator>();

  constructor(private almaInvestigatorSearchService: AlmaInvestigatorSearchService) {
  }

  ngOnInit() {
  }

  /**
   * Called when a table row is clicked. Sets a new PI in session storage.
   * @param pi The clicked PI
   */
  rowClick(pi: IAlmaInvestigator) {
    this.selectedPi = this.selectedPi === pi ? null : pi;
    this.almaInvestigatorSearchService.selectedPi = pi;
  }

}
