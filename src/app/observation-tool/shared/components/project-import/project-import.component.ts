import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs/Observable';
import {ObsProject} from '../../classes/obsproject';

@Component({
  selector: 'app-project-import',
  templateUrl: './project-import.component.html',
  styleUrls: ['./project-import.component.css']
})
export class ProjectImportComponent implements OnInit {

  projects: Observable<any[]>;
  _selectedProject: ObsProject;
  @Output() selectedProjectEmitter = new EventEmitter();

  constructor(private persistenceService: ProjectService) { }

  ngOnInit() {
    this.projects = this.persistenceService.getAllProjects();
  }

  rowClicked(event: ObsProject) {
    this._selectedProject = event;
    this.selectedProjectEmitter.emit(event);
  }

}
