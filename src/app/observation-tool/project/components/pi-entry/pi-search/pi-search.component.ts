import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {SuiModalService} from 'ng2-semantic-ui';
import {ToastsManager} from 'ng2-toastr';
import {AlmaInvestigatorSearchModal} from '../../../../alma-investigator-search/components/modal/modal.component';
import {AlmaInvestigatorSearchService} from '../../../../alma-investigator-search/services/alma-investigator-search.service';
import {ProjectService} from '../../../../shared/services/project.service';
import {IAlmaInvestigator} from '../../../../shared/interfaces/alma-investigator.interface';
import {IInvestigator} from '../../../../shared/interfaces/apdm/investigator.interface';

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
  pi: IInvestigator;

  constructor(private almaInvestigatorSearchService: AlmaInvestigatorSearchService,
              private projectService: ProjectService,
              private suiModalService: SuiModalService,
              private toastMgr: ToastsManager,
              viewContainerRef: ViewContainerRef) {
    this.toastMgr.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {
    this.projectService.loadedProposal.subscribe(result => {
      if (result) {
        this.pi = result.principalInvestigator;
      }
    });
  }

  // get pi(): IAlmaInvestigator {
  //   if (this.projectService.hasProposalLoaded()) {
  //     return this.projectService.loadedProposal.getValue().PrincipalInvestigator;
  //   } else {
  //     console.log('no pi');
  //   }
  //   // If no proposal, load investigator from project
  // }

  makeModal(piName: string) {
    this.suiModalService
      .open(new AlmaInvestigatorSearchModal(piName))
      .onApprove(result => {
        this.projectService.setPi(this.almaInvestigatorSearchService.selectedPi);
      })
      .onDeny(result => {
        console.log(result);
      });
  }
}
