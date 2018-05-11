import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {SuiModalService} from 'ng2-semantic-ui';
import {ToastsManager} from 'ng2-toastr';
import {AlmaInvestigatorSearchModal} from '../../../../alma-investigator-search/components/modal/modal.component';
import {AlmaInvestigatorSearchService} from '../../../../alma-investigator-search/services/alma-investigator-search.service';
import {ProjectService} from '../../../../shared/services/project.service';

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
  INPUT_PLACEHOLDER = 'Enter Principal Investigator name';

  isLoading;

  constructor(private almaInvestigatorSearchService: AlmaInvestigatorSearchService,
              private projectService: ProjectService,
              private suiModalService: SuiModalService,
              private toastMgr: ToastsManager,
              viewContainerRef: ViewContainerRef) {
    this.toastMgr.setRootViewContainerRef(viewContainerRef);
  }

  /**
   * Checks for a chosen PI in session storage and sets if available
   */
  ngOnInit() {

  }

  makeModal(piName: string) {
    this.suiModalService
      .open(new AlmaInvestigatorSearchModal(piName))
      .onApprove(result => console.log(result)/*this.newPi()*/)
      .onDeny(result => {

      });
  }
}
