import {Component, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../../../../shared/classes/obsproject';
import {IObsProject} from '../../../../shared/interfaces/project/obsproject.interface';
import {PersistenceService} from '../../../../shared/services/persistence.service';

/**
 * Project info component
 */

@Component({
             selector: 'app-project-info',
             templateUrl: './project-info.component.html',
             styleUrls: ['./project-info.component.css']
           })
export class ProjectInfoComponent implements OnInit {

  project: Observable<ObsProject>;
  constructor(private persistenceService: PersistenceService) {
  }

  ngOnInit(): void {
    this.project = this.persistenceService.getProject('');
  }

}
