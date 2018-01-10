import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {SuiModalService} from 'ng2-semantic-ui';
import {ToastsManager} from 'ng2-toastr';
import {AlmaInvestigatorSearchModal} from '../../../../alma-investigator-search/components/modal/modal.component';
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

  constructor(private suiModalService: SuiModalService,
              private toastMgr: ToastsManager,
              viewContainerRef: ViewContainerRef) {
    this.toastMgr.setRootViewContainerRef(viewContainerRef);
  }

  /**
   * Checks for a chosen PI in session storage and sets if available
   */
  ngOnInit() {
    if (sessionStorage['selectedPi']) {
      this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    }
  }

  newPi() {
    if (sessionStorage['selectedPi']) {
      this.passedPi = JSON.parse(sessionStorage.getItem('selectedPi'));
    }
  }

  makeModal(piName: string) {
    this.suiModalService
        .open(new AlmaInvestigatorSearchModal(piName))
        .onApprove(result => console.log(result)/*this.newPi()*/)
        .onDeny(result => {
          if (sessionStorage.getItem('modalError') === 'unknown error') {
            this.toastMgr.error('Could not contact user lookup server', 'Error');
            sessionStorage.removeItem('modalError');
          }
        });
  }
}
