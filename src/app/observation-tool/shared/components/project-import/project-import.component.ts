import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersistenceService} from '../../services/persistence.service';
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

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit() {
    this.persistenceService.getAllProjects().subscribe(result => console.log(result));
    this.projects = this.persistenceService.getAllProjects();
  }

  rowClicked(event: ObsProject) {
    this._selectedProject = event;
    this.selectedProjectEmitter.emit(event);
  }

}
