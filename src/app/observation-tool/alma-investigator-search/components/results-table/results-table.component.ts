/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

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
