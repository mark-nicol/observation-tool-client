import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs/Observable';
import {IObsProject} from '../../interfaces/apdm/obs-project.interface';

@Component({
  selector: 'app-project-import',
  templateUrl: './project-import.component.html',
  styleUrls: ['./project-import.component.css']
})
export class ProjectImportComponent implements OnInit {

  projects: Observable<any[]>;
  _selectedProject: IObsProject;
  @Output() selectedProjectEmitter = new EventEmitter();

  constructor(private persistenceService: ProjectService) { }

  ngOnInit() {
    this.projects = this.persistenceService.getAllProjects();
  }

  rowClicked(event: IObsProject) {
    this._selectedProject = event;
    this.selectedProjectEmitter.emit(event);
  }

}
