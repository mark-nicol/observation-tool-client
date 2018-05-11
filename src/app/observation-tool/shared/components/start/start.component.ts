import {Component, OnInit} from '@angular/core';
import {ProjectImportModal} from '../project-import-modal/project-import-modal.component';
import {ObsProject} from '../../classes/obsproject';
import {SuiModalService} from 'ng2-semantic-ui';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private suiModalService: SuiModalService,
              private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
  }

  makeProjectImportModal() {
    this.suiModalService
      .open(new ProjectImportModal())
      .onApprove((result: ObsProject) => {
        this.projectService.selectProject(result);
        this.router.navigate(['/project']).then();
      })
      .onDeny(result => {
      });
  }

  loadNewProject() {
    this.projectService.startNewProject();
    this.router.navigate(['/project']).then();
  }

}
