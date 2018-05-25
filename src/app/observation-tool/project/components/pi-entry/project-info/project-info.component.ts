import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProjectService} from '../../../../shared/services/project.service';
import {ToastsManager} from 'ng2-toastr';
import {IObsProject} from '../../../../shared/interfaces/apdm/obs-project.interface';

/**
 * Project info component
 */

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  project: IObsProject;

  constructor(private persistenceService: ProjectService,
              viewContainerRef: ViewContainerRef,
              private toastsManager: ToastsManager) {
    this.toastsManager.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    this.persistenceService.loadedProject.subscribe(
      result => this.project = result,
      error => this.toastsManager.error('Could not retrieve project data', 'Error', {showCloseButton: true})
    );
  }

}
