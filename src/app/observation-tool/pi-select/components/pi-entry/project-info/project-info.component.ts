import {Component, OnInit} from '@angular/core';
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
    this.persistenceService.getProject().subscribe(res => this.data = res);
  }

}
