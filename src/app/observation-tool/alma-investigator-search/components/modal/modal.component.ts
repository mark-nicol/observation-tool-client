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

import {HttpErrorResponse} from '@angular/common/http';
import {Component} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';
import {IAlmaInvestigator} from '../../../shared/interfaces/alma-investigator.interface';
import {AlmaInvestigatorSearchService} from '../../services/alma-investigator-search.service';

interface ModalContext {
  name: string;
  title: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AlmaInvestigatorSearchService]
})

export class AlmaInvestigatorSearchModalComponent {

  searchResults: IAlmaInvestigator[];
  isSearching = false;
  resultsFound = false;

  constructor(public modal: SuiModal<ModalContext>,
              private almaInvestigatorSearchService: AlmaInvestigatorSearchService) {
    this.search('Name', this.modal.context.name);
  }

  search(searchType, searchString) {
    if (searchType === 'ALMA ID') {
      searchType = 'Uid';
    }
    this.isSearching = true;
    this.resultsFound = false;
    this.almaInvestigatorSearchService.search(searchType, searchString)
      .subscribe(
        (results: IAlmaInvestigator[]) => {
          if (results.length > 0) {
            this.resultsFound = true;
          }
          this.searchResults = results;
        },
        (error: HttpErrorResponse) => {
          this.isSearching = false;
          this.resultsFound = false;
          console.log(error);
          sessionStorage.setItem('modalError', 'unknown error');
          this.modal.deny(undefined);
        },
        () => {
          this.isSearching = false;
        }
      );
  }

}

export class AlmaInvestigatorSearchModal extends ComponentModalConfig<ModalContext, void, void> {

  constructor(name?,
              title = 'Investigator Search',
              size = ModalSize.Large) {
    super(AlmaInvestigatorSearchModalComponent, {name, title});
    this.transitionDuration = 200;
    this.size = size;
    this.mustScroll = true;
    this.isClosable = true;
    this.isFullScreen = true;
  }
}
