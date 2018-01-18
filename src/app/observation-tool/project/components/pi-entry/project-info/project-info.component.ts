import {Component, OnInit} from '@angular/core';
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

  project?: any;

  // project: Observable<any>;

  constructor(private persistenceService: PersistenceService) {
  }

  ngOnInit(): void {
    this.persistenceService.getProject('').subscribe(result => this.project = result);
  }

}
