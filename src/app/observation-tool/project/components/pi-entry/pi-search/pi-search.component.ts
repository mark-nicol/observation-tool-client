import {Component, OnInit} from '@angular/core';
import {SuiModalService} from 'ng2-semantic-ui';
import {AlmaInvestigatorInterface} from '../../../../shared/interfaces/alma-investigator.interface';

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
  passedPi: AlmaInvestigatorInterface;

  constructor(private suiModalService: SuiModalService) {

  }

  /**
   * Checks for a chosen PI in session storage and sets if available
   */
  ngOnInit() {
    if (sessionStorage['selectedPi']) {
      this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    }
  }

  // makeModal() {
  //   this.suiModalService
  //       .open(new PiSelectModal('Hi', 'hello'))
  //       .onApprove(() => alert('Approve'))
  //       .onDeny(() => alert('deny'));
  // }
}
