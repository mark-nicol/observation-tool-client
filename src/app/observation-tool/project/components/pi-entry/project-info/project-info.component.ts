import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../../../../shared/classes/obsproject';
import {PersistenceService} from '../../../../shared/services/persistence.service';
import {ToastsManager} from 'ng2-toastr';

/**
 * Project info component
 */

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  project: ObsProject;

  constructor(private persistenceService: PersistenceService,
              viewContainerRef: ViewContainerRef,
              private toastsManager: ToastsManager) {
    this.toastsManager.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    this.persistenceService.getProject().subscribe(
      result => this.project = result,
      error => this.toastsManager.error('Could not retrieve project data', 'Error', {showCloseButton: true})
    );
  }

}
