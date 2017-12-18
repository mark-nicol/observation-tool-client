import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CURRENT_PROJECT} from '../../../../shared/data/current-project';
import {ProjectInterface} from '../../../../shared/interfaces/project.interface';
import {PersistenceService} from '../../../../shared/services/persistence.service';

/**
 * Project info component
 */

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit{

  data: ProjectInterface;

  constructor(private persistenceService: PersistenceService) {
  }

  ngOnInit(): void {
    this.persistenceService.getProject(CURRENT_PROJECT);
    console.log(this.data);
  }

}
